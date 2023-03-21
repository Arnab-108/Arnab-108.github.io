import { Box, Flex, Heading } from "@chakra-ui/react";

function Contact(){
    return(
        <Box  width={"100%"} h="90vh" bgColor="gray.200" id="contact" >
            <Heading pt={"4vh"} fontWeight="semibold" textDecoration="underline">Contact</Heading>
            <Box width={"90%"} height="70vh" bgColor={"white"} margin="5vh auto">
                <Flex width={"80vw"} h="65vh" gap={"7vw"} justifyContent="center" pos={"relative"} top="3vh" left="5vw" border={"1px solid black"}  >
                    
                </Flex>

            </Box>
        </Box>
    )
}

export default Contact