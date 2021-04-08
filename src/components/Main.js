import { Box, Container, Spacer, Flex, HStack } from '@chakra-ui/layout';
import React from 'react';
import '../components/Main.css';

import FirstBox from './FirstBox'
import SecondBox from './SecondBox'


function Main() {
        
    return (
        <>
        {/* <Container maxW="container.lg"> */}
        <Box padding='10px 8px'>
        {/* <Flex justifyContent='space-between' flexWrap='wrap'> */}
            <HStack spacing='5' alignItems='flex-start'>
                <Box >
                    <FirstBox />
                </Box>
                
                <Spacer />

                <Box >
                    <SecondBox />
                </Box>
                </HStack>
            {/* </Flex> */}
        </Box>
        {/* </Container> */}
            
        
        
            
        </>
    )
}
export default Main
