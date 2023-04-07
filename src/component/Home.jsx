import { Box, Flex, Heading, Text, VStack,Image, Button, Link } from "@chakra-ui/react";

function Home(){
    return (
        <>
            <Box 
            width="100%" 
            height="80vh" 
            id="home"
            >
                <VStack width={"55vw"} height="50%"   align="flex-start" gap={"20px"} pos="relative" top="28vh" left="30vw">
                    <Text fontSize="3xl">Hello I am a,</Text>
                    <Heading as="h1" size={"2xl"}>Full Stack Web Developer</Heading>
                    <a href='https://drive.google.com/file/d/1R9IxK8mk5jwEj6CC83krfDcRAv74nfX5/view?usp=share_link' download target="_blank">
                        <Button id="resume-button-2" mr="10vw" colorScheme='teal' size='lg'>
                            <Text textDecoration={"none"} >
                                Resume
                            </Text>
                        </Button>
                    </a>
                </VStack>
            </Box>
        </>
    )
}

export default Home