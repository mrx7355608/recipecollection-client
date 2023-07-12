import { Flex, Button, Input } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Searchbar() {
    const [query, setQuery] = useState('');
    const navigateTo = useNavigate();

    return (
        <Flex>
            <form
                style={{
                    display: 'flex',
                    gap: '1',
                    alignItems: 'center',
                    marginLeft: '1rem',
                    width: '500px',
                    background: 'white',
                    borderRadius: '2px',
                    borderWidth: 2,
                    borderColor: '#1e1e1e',
                }}
                onSubmit={() => navigateTo(`/search?query=${query}`)}
            >
                <Input
                    bg="transparent"
                    size="lg"
                    placeholder="Search"
                    variant="ghost"
                    h="min-content"
                    onChange={(e) => {
                        const { value } = e.target;
                        setQuery(value);
                    }}
                />
                <Button
                    bg="transparent"
                    size="md"
                    variant="solid"
                    borderRadius="sm"
                    type="submit"
                >
                    <FaSearch />
                </Button>
            </form>
        </Flex>
    );
}
