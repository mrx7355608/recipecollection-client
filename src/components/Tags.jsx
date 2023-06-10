import { Flex, Text } from '@chakra-ui/react';

/* eslint-disable react/prop-types */
export default function Tags({ tags }) {
    return (
        <Flex gap={'3'} alignItems={'center'} justifyContent={'flex-start'}>
            {tags.map((item, index) => {
                return (
                    <Text
                        borderRadius={'md'}
                        fontSize={'sm'}
                        borderColor={'gray.500'}
                        borderWidth={1}
                        color="gray.600"
                        key={index}
                        fontWeight={'medium'}
                        px="2"
                        pt="0.5"
                    >
                        {item}
                    </Text>
                );
            })}
        </Flex>
    );
}
