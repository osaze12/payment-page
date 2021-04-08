import React from 'react';
import { Box, Flex, Image, Select, Spacer } from "@chakra-ui/react"
import Logo from './assets/logo.PNG'
import PaymentView from './PaymentView';


function FirstBox() {
        
    return (
        <>
            <Box bg="white" padding='10'>
                <Box className="first_box_top" marginBottom="10">
                    <Flex justifyContent='space-between'>
                        <Box className="logo">
                            <Image src={Logo} alt="brand"></Image>
                        </Box>
                        {/* <Spacer /> */}
                        <Box className="profile">
                            <Select placeholder="Annette">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                        </Box>
                        
                    </Flex>

                    
                </Box>
                <PaymentView />
            </Box>
        </>
    )
}
export default FirstBox