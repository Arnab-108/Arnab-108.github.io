import { Box, Flex, Heading, Text, VStack,Image, Button } from "@chakra-ui/react";

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
                    <Button mr="10vw" colorScheme='teal' size='lg'>Resume</Button>
                </VStack>
            </Box>
        </>
    )
}

export default Home