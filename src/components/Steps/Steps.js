import { Box, VStack, HStack, Flex, Center, Text } from '@chakra-ui/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Steps(props) {
    return (
        <Box>
            <HStack spacing="7px">
                <Box bg={`${props.bgColor}.200`} borderRadius="99px" >
                    <Flex alignItems='center' justifyContent='center' width="40px" height="40px" color={`${props.bgColor}.400`}>
                        <Center >
                            <FontAwesomeIcon icon={props.icon} />
                        </Center>
                    
                    </Flex>
                    
                </Box>

                <Box>
                    <VStack spacing="1px" alignItems='flex-start'>
                        <Text fontSize="sm" color='grey'>Step {props.no}</Text>
                        <Text style={{fontWeight: props.current ? 'bold' : 'normal'}} fontSize="md">{props.title }</Text>
                 
                    </VStack>
                </Box>
            </HStack>
            
        </Box>
    )
}

export default Steps
