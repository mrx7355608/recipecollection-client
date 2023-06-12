import { Flex, Box } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import CommentSection from '../components/Recipe/CommentSection';
import Ingredients from '../components/Recipe/Ingredients';
import Steps from '../components/Recipe/Steps';
import Details from '../components/Recipe/Details';
import ChefInfo from '../components/Recipe/ChefInfo';

export default function Recipe() {
    const ingredients = [
        'Potato 2Kgs',
        'Green chilly 2 bowls',
        'Garlic 30 grams',
        'Ketchup 30ml',
    ];
    const steps = [
        'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
        'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
        'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
        'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
        'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
        'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    ];

    return (
        <>
            <Navbar />
            <Flex direction={'column'} p="6">
                {/* DETAILS */}
                <Details />

                <Flex gap="5" h="full">
                    <Box bg="white" borderRadius={'md'} p="7" shadow="sm">
                        <Ingredients ingredients={ingredients} />
                        <Box my="8"></Box>
                        <Steps steps={steps} />
                    </Box>
                    <ChefInfo />
                </Flex>
                <CommentSection />
            </Flex>
        </>
    );
}
