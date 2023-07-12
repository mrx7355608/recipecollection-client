import { Navigate } from 'react-router-dom';
import { useUser } from '../contexts/user';

export default function ProtectedRoute({ children }) {
    const { user } = useUser();

    if (user == null) return <Navigate to={'/'} replace />;

    return children;
}
