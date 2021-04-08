import { Box, Flex, Heading, Spacer, Text, HStack, Stack } from '@chakra-ui/layout'
import { Tab, TabList, Tabs, TabPanels, TabPanel } from '@chakra-ui/tabs'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import ReactBankCard from "react-bank-card"
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import React, { useState } from 'react'
// import { FormHelperText } from '@chakra-ui/form-control';
import './PaymentView.css'
import {
    FormControl,
    FormLabel,
    Input,
    Button,
  } from "@chakra-ui/react"

function PaymentView() {
    const [state, setState] = useState({cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: ''});

    console.log(state.expiry)
      
    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        });
      }
    return (
        <Box className="payemnt_details">
            <Box>
                <Flex justifyContent='space-between'>
                    <Heading>Payment details</Heading>
                    {/* <Spacer /> */}
                    <Box className="card_info" marginBottom='10'>
                        <HStack spacing="2">
                            <span><FontAwesomeIcon icon={faLock} /> </span>
                            <Box>
                                <Text fontWeight='bold' fontSize="small">Card is secure</Text>
                                <Text fontSize='x-small' color='grey'>Your Data is protected,<br /> everything will be private</Text>
                                

                            </Box>
                        </HStack>
                    </Box>
                </Flex>
                        <Tabs>
                        <TabList>
                            <Tab>Credit Card</Tab>
                            <Tab>Paypal</Tab>
                            <Tab>Others</Tab>
                        </TabList>
                        

                        <TabPanels>
                            <TabPanel>
                                {/* <Flex alignItems='flex-start' flexWrap='wrap' justifyContent='center' alignItems='center'> */}
                                <HStack spacing='10' alignItems='flex-start'>
                                    <Box className="cards" >
                                        
                                    <Stack spacing="10">
                                        
                                        
                                        <Cards
                                            cvc={'412'}
                                            expiry={'2020 04 05'}
                                            focused={state.focus}
                                            name={'Tosin Adebayo'}
                                            number={'5101 5101 5101 5101 '}
                                            
                                            />
                                 
                                        

                                        <Cards
                                            cvc={'412'}
                                            expiry={'2020 04 05'}
                                            focused={state.focus}
                                            name={'Tosin Adebayo'}
                                            number={'4901 4901 4901 4901 '}
                                            />

                                        <Cards
                                            cvc={state.cvc}
                                            expiry={state.expiry}
                                            focused={state.focus}
                                            name={state.name}
                                            number={state.number}
                                            />
                                    </Stack>
                                    </Box>

                                    {/* <Spacer  /> */}

                                    <Box className="card_input_details" >
                                    <form>
                                        <Stack spacing="5">
                                            <FormControl id="email">
                                                <FormLabel>Credit card</FormLabel>
                                                <Input
                                                type="tel"
                                                name="number"
                                                placeholder="Card Number"
                                                onChange={handleInputChange}
                                                
                                                />
                                                </FormControl>


                                                <FormControl >
                                                    <FormLabel>Name</FormLabel>
                                                    <Input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Your Name"
                                                    onChange={handleInputChange}
                                                    />
                                                    </FormControl>
                                                <Box>
                                                    <HStack spacing='6' >
                                                    <FormControl id="expiration date">
                                                    <FormLabel>Expiration Date</FormLabel>
                                                    <Input
                                                    type="date"
                                                    name="expiry"
                                                    placeholder="Expire Date"
                                                    onChange={handleInputChange}
                                                    />
                                                    </FormControl>

                                                    <FormControl>
                                                    <FormLabel>CVC</FormLabel>
                                                    <Input
                                                    type="number"
                                                    name="cvc"
                                                    placeholder="CVC"
                                                    onChange={handleInputChange}
                                                    />
                                                    </FormControl>
                                                    </HStack>
                                                
                                                </Box>

                                                <Box className="button">
                                                        <HStack spacing='6' flexWrap='wrap'>
                                                            <Button bg="black" color='white'>Confirm Order</Button>
                                                            <Button>Cancel and Return</Button>
                                                        </HStack>
                                                    </Box>
                                            
                                        </Stack>
                                        
                                    </form>
                                    
                                    </Box>
                                    </HStack>
                                {/* </Flex> */}
                            </TabPanel>
                            <TabPanel>
                            <p>Paypal!</p>
                            </TabPanel>
                            <TabPanel>
                            <p>Others!</p>
                            </TabPanel>
                        </TabPanels>
                        
                        </Tabs>
                    
                
            </Box>
        </Box>

    )
}

export default PaymentView
