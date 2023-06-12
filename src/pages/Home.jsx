import { Flex, Heading, Box, Button } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import RecipesList from '../components/RecipesList';
import Searchbar from '../components/Searchbar';

export default function Home() {
    const countries = ['Pakistani', 'Indian', 'French', 'Italian', 'German'];

    return (
        <>
            <Hero />
            <Flex direction={'column'} px="4" alignItems={'flex-start'}>
                <Box mt="12"></Box>
                <Heading color="gray.700" mt="12" ml="5" mb="5">
                    Find your recipe
                </Heading>
                <Flex
                    alignItems={'center'}
                    justifyContent={'space-evenly'}
                    gap="4"
                >
                    <Searchbar />
                    {countries.map((item, index) => {
                        return (
                            <Button
                                key={index}
                                p="1"
                                variant="outline"
                                fontWeight={'semibold'}
                                px="3"
                                borderRadius={'sm'}
                                borderWidth={2}
                                borderColor={'gray.600'}
                            >
                                {item}
                            </Button>
                        );
                    })}
                </Flex>
                <RecipesList />
            </Flex>
        </>
    );
}
