import { FaStar } from 'react-icons/fa';
import { Flex, Text } from '@chakra-ui/react';

export default function StarRatings({ ratings, size, fontSize }) {
    const ratedStarsArray = Array.from({ length: ratings }, () => '');
    const nonRatedStarsArray = Array.from({ length: 5 - ratings }, () => '');

    return (
        <Flex alignItems={'center'} gap={'1'}>
            {ratedStarsArray.map((item, index) => {
                return <FaStar size={size} key={index} color="orange" />;
            })}
            {nonRatedStarsArray.map((item, index) => {
                return <FaStar size={size} key={index} />;
            })}
            <Text
                textDecoration={'underline'}
                textDecorationColor={'yellow.400'}
                textUnderlineOffset={4}
                fontWeight="semibold"
                mt="1.5"
                ml="1"
                letterSpacing={1}
                fontSize={fontSize}
            >
                {ratings.toFixed(1)}
            </Text>
        </Flex>
    );
}
