import { Box, Stack, HStack } from '@chakra-ui/layout';
import { 
    Heading, Text } from '@chakra-ui/layout';
     import { Accordion, 
        AccordionButton, 
        AccordionIcon, 
        AccordionItem, 
        AccordionPanel, Flex, Spacer } from "@chakra-ui/react"
import { faCalendarAlt, faShoppingCart, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Steps from './Steps/Steps'


function SecondBox() {
        
    return (
        <>
            <Box marginTop="10" paddingRight='10'>
                <Heading marginBottom='10'> Order summary</Heading>
                
                <div>
                    <HStack spacing="20px" marginBottom='10'>
                        <Steps no="1" bgColor="blue" title="Shipping"  icon={faShoppingCart}  />
                        <Steps no="2" bgColor="orange" title="Payment" current={true}  icon={faCalendarAlt} />
                        <Steps no="3" bgColor="green" title="Review"   icon={faSyncAlt} />
                    </HStack>
                    
                </div>

                <Box>
                    <Accordion allowToggle borderColor='white'>
                        <AccordionItem>
                            <h2>
                            <AccordionButton bg='white' borderRadius='8px' marginBottom="3">
                                <Box flex="1" textAlign="left">
                                    <Text fontSize="md"><b>Prada</b></Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                <Stack spacing="10px">
                                    <Flex>
                                        <Text fontSize="small" color='grey'>Leader mini-bag</Text>
                                        <Spacer />
                                        <span>$1850.00</span>
                                    </Flex>

                                    <Flex>
                                        <Text fontSize="small" color='grey'>Estimated Shipping</Text>
                                        <Spacer />
                                        <span>$370.00</span>
                                    </Flex>

                                    <Flex>
                                        <Text fontSize="small" color='grey'>DisCount</Text>
                                        <Spacer />
                                        <span>$0.00</span>
                                    </Flex>

                                    <Flex>
                                        <Text fontSize="small" color='grey'>Total</Text>
                                        <Spacer />
                                        <span>$2220.00</span>
                                    </Flex>
                                    
                                </Stack>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                            <AccordionButton bg='white' borderRadius='8px'  marginBottom="3">
                                <Box flex="1" textAlign="left">
                                <Text fontSize="md"><b>Dr. Martens</b></Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            <Stack spacing="10px">
                                    <Flex>
                                        <Text fontSize="small" color='grey'>Leader mini-bag</Text>
                                        <Spacer />
                                        <span>$1850.00</span>
                                    </Flex>

                                    <Flex>
                                        <Text fontSize="small" color='grey'>Estimated Shipping</Text>
                                        <Spacer />
                                        <span>$370.00</span>
                                    </Flex>

                                    <Flex>
                                        <Text fontSize="small" color='grey'>DisCount</Text>
                                        <Spacer />
                                        <span>$0.00</span>
                                    </Flex>

                                    <Flex>
                                        <Text fontSize="small" color='grey'>Total</Text>
                                        <Spacer />
                                        <span>$2220.00</span>
                                    </Flex>
                                    
                                </Stack>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <h2>
                            <AccordionButton bg='white' borderRadius='8px' marginBottom="3">
                                <Box flex="1" textAlign="left">
                                <Text fontSize="md"><b>Chanel</b></Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                            <Stack spacing="10px">
                                    <Flex>
                                        <Text fontSize="small" color='grey'>Leader mini-bag</Text>
                                        <Spacer />
                                        <span>$1850.00</span>
                                    </Flex>

                                    <Flex>
                                        <Text fontSize="small" color='grey'>Estimated Shipping</Text>
                                        <Spacer />
                                        <span>$370.00</span>
                                    </Flex>

                                    <Flex>
                                        <Text fontSize="small" color='grey'>DisCount</Text>
                                        <Spacer />
                                        <span>$0.00</span>
                                    </Flex>

                                    <Flex>
                                        <Text fontSize="small" color='grey'>Total</Text>
                                        <Spacer />
                                        <span>$2220.00</span>
                                    </Flex>
                                    
                                </Stack>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>

                <Box marginTop='10'>
                    <Flex>
                        <Text fontSize="small">Total Amount</Text>
                        <Spacer />
                        <span><Text fontSize='lg'><b>$3680.60</b></Text></span>
                    </Flex>
                </Box>
               
            </Box>
        </>
    )
}
export default SecondBox