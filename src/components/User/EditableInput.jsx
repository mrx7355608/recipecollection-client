import React, { useState } from 'react';
import { Box, Button, Input } from '@chakra-ui/react';
import { editUserData } from '../../services/user';

// eslint-disable-next-line react/prop-types
export default function EditableInput({
    Icon,
    inputType,
    inputName,
    inputPlaceholder,
}) {
    const [isDisabled, setDisabled] = useState(true);
    const [showSaveAndContinue, setShowSave] = useState(false);
    const [value, setValue] = useState(inputPlaceholder);

    const iconStyle = {
        display: 'inline',
        color: '#4d4d4d',
    };

    return (
        <Box mb="3" pl="2" borderBottom={'2px'} borderColor={'gray.700'}>
            {React.cloneElement(Icon, { style: { ...iconStyle } })}
            <Input
                disabled={isDisabled}
                variant={'ghost'}
                px="3"
                borderRadius={'none'}
                w={showSaveAndContinue ? '83%' : '90%'}
                type={inputType}
                name={inputName}
                value={value}
                ml="0.5"
                onChange={(e) => setValue(e.target.value)}
            />
            {showSaveAndContinue ? (
                <>
                    <Button
                        onClick={async () => {
                            const { error, data } = await editUserData({
                                [inputName]: value,
                            });
                            if (error) {
                                alert('An error occured');
                                return console.log(error);
                            }
                            if (data) {
                                setShowSave(false);
                                return setDisabled(true);
                            }
                        }}
                        variant={'ghost'}
                        colorScheme="yellow"
                        size="sm"
                    >
                        Save
                    </Button>
                    <Button
                        onClick={() => {
                            setShowSave(false);
                            setDisabled(true);
                            setValue(inputPlaceholder);
                        }}
                        variant={'ghost'}
                        size="sm"
                    >
                        Cancel
                    </Button>
                </>
            ) : (
                <Button
                    onClick={() => {
                        setDisabled(!isDisabled);
                        setShowSave(true);
                    }}
                    variant={'ghost'}
                    size="sm"
                >
                    Edit
                </Button>
            )}
        </Box>
    );
}
