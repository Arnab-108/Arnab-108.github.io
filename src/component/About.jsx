import { Image, Box, Flex, Heading , Text, VStack} from "@chakra-ui/react";
import photo from "./photo.jpg"
function About(){
    return (
        <div >
        <Box  width={"100%"} h="90vh" bgColor="gray.700" id="about" className="about section" >
            <Heading pt={"4vh"} fontWeight="semibold" textDecoration="underline" color={"white"}>About Me</Heading>
            <Flex width={"80vw"} h="65vh" gap={"7vw"} justifyContent="center" pos={"relative"} top="10vh" left="10vw"  >
                <Box mt="5vh" width={"25vw"} h="80%" >
                    <Image 
                        borderRadius='full'
                        boxSize='sm'
                        src={photo}
                        alt='Dan Abramov'
                    />

                </Box>
                <Box color={"white"}>
                    <VStack align="flex-start" justifyContent={"center"} width="40vw" pos={"relative"} top="15vh">
                        <Text fontSize="2xl" fontWeight="semibold">I am Arnab Adhikary</Text>
                        <Text fontSize={"md"} align="start">
                            Innovative, result-oriented Full-Stack Web Developer with a
                            good grasp of React Framework and other web
                            development tools like html , css , js. Have the
                            ability to convert business requirements into
                            technical solutions . Looking forward to start my IT
                            career
                        </Text>
                    </VStack>
                </Box>
            </Flex>
        </Box>

        </div>
    )
}

export default About