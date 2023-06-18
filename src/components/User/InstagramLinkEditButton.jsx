import { useState } from 'react';
import { Button, Flex, Input } from '@chakra-ui/react';
import { FaInstagram } from 'react-icons/fa';

export default function InstagramLinkEditButton() {
    const [isDisabled, setDisabled] = useState(true);
    return (
        <Flex
            borderBottom={'2px'}
            alignItems={'center'}
            borderRadius={'none'}
            px="2"
        >
            <FaInstagram size={24} />
            <Input
                py="0"
                variant={'ghost'}
                bg="transparent"
                disabled={isDisabled}
            />
            <Button
                onClick={() => setDisabled(!isDisabled)}
                bg="transparent"
                _hover={{ background: 'transparent' }}
            >
                {isDisabled ? 'Edit' : 'Cancel'}
            </Button>
        </Flex>
    );
}
