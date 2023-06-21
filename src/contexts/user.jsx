import { createContext, useContext, useReducer, useState } from 'react';

const initialValue = {
    user: null,
    userDispatcher: () => null,
};
const UserContext = createContext(initialValue);

export const useUser = () => useContext(UserContext);

// Reducer function
function userReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return action.user;

        case 'LOGOUT':
            return null;

        case 'FETCHED_USER_DATA':
            return action.user;

        default:
            return state;
    }
}

export function UserProvider({ children }) {
    const [user, dispatch] = useReducer(userReducer, null);

    return (
        <UserContext.Provider value={{ user, userDispatcher: dispatch }}>
            {children}
        </UserContext.Provider>
    );
}
