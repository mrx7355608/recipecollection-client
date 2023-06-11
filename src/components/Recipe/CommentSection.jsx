import {
    Heading,
    Box,
    VStack,
    Flex,
    Textarea,
    Image,
    Text,
    Button,
} from '@chakra-ui/react';

export default function CommentSection() {
    return (
        <Box my="5" bg="white" borderRadius={'md'} shadow="sm" p="5">
            <Heading fontSize="2xl" mt="3">
                Comments 3
            </Heading>
            <Textarea
                placeholder="Add your comment"
                mt="3"
                resize={'none'}
                w="lg"
                mb="6"
                p="4"
                borderRadius={'sm'}
            ></Textarea>
            <Button mt="12" colorScheme="yellow" borderRadius={'sm'} ml="3">
                Comment
            </Button>
            <VStack alignItems={'flex-start'}>
                <Flex gap="4" alignItems={'center'} bg="white" p="2">
                    <Image
                        src="/hero.jpg"
                        w="10"
                        h="10"
                        borderRadius={'full'}
                        fit={'cover'}
                        mb="3"
                    />
                    <Box>
                        <Heading mb="0.5" fontSize={'md'}>
                            Fawad Imran
                        </Heading>
                        <Text fontSize={'sm'}>
                            Lorem ipsum dolor sit amet, qui minim labore
                            adipisicing minim sint cillum sint consectetur
                            cupidatat.
                        </Text>
                    </Box>
                </Flex>
            </VStack>
        </Box>
    );
}
