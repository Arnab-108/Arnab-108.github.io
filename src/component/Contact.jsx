import { Box, Button, Flex, FormControl, FormLabel, Heading, HStack, Input, InputGroup, InputLeftElement, Link, Text, Textarea, VStack } from "@chakra-ui/react";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
function Contact(){
    return(
        <Box  width={"100%"} h="90vh" id="contact" >
            <Heading pt={"4vh"} fontWeight="semibold" textDecoration="underline">Contact</Heading>
            <Box width={"90%"} height="70vh" bgColor={"white"} margin="5vh auto">
                <Flex width={"80vw"} h="65vh" gap={"7vw"} justifyContent="center" pos={"relative"} top="3vh" left="5vw"  >
                    <Box width={"50%"}>
                        <VStack align="flex-start">
                            <Heading  size={"md"} fontWeight="semibold"  >Get in Touch</Heading>
                            <Text fontSize={"md"} align={"start"}>Got a project? Reach out and let's work together on something exciting. Big or small. Mobile or web.</Text>
                        </VStack>

                        <VStack align={"flex-start"} mt="5vh" gap={6}>
                            <Link >
                                <HStack cursor={"pointer"} gap={5}>
                                    <EmailIcon sx={{fontSize:"35px" , color:"#92bcb5"}} />
                                    <Text align={"end"} fontSize={"17px"}>arnabadhikary007@gmail.com</Text>
                                </HStack>
                            </Link>
                            <Link href="https://www.linkedin.com/in/arnab-adhikary-80393822a/" isExternal>
                                <HStack cursor={"pointer"} gap={5}>
                                    <LinkedInIcon sx={{fontSize:"35px" , color:"#92bcb5"}} />
                                    <Text align={"end"} fontSize={"17px"}>Linkedin</Text>
                                </HStack>
                            </Link>
                            <Link href="https://github.com/Arnab-108" isExternal>
                                <HStack cursor={"pointer"} gap={5}>
                                    <GitHubIcon sx={{fontSize:"35px" , color:"#92bcb5"}} />
                                    <Text align={"end"} fontSize={"17px"}>Github</Text>
                                </HStack>
                            </Link>
                            <Link>
                                <HStack cursor={"pointer"} gap={5}>
                                    <LocalPhoneIcon sx={{fontSize:"35px" , color:"#92bcb5"}} />
                                    <Text align={"end"} fontSize={"17px"}>+91 9088069205</Text>
                                </HStack>
                            </Link>
                        </VStack>
                    </Box>
                    <Box width={"50%"}>
                            <Heading align="start" pl={"2vw"} textDecoration="underline" as={"h6"} size={"lg"} fontWeight="semibold"  >Connect With Me</Heading>
                            <Box bg="white" borderRadius="lg">
                            <Box m={8} color="#0B0E3F">
                                <VStack spacing={5}>
                                <FormControl id="name">
                                    <FormLabel>Your Name</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<PersonOutlineOutlinedIcon sx={{fontSize:"22px"}} />}
                                    />
                                    <Input type="text" size="md" />
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="name">
                                    <FormLabel>Mail</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<EmailOutlinedIcon sx={{fontSize:"22px"}} />}
                                    />
                                    <Input type="text" size="md" />
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="name">
                                    <FormLabel>Message</FormLabel>
                                    <Textarea
                                    borderColor="gray.300"
                                    _hover={{
                                        borderRadius: 'gray.300',
                                    }}
                                    placeholder="message"
                                    />
                                </FormControl>
                                <FormControl id="name" float="right">
                                    <Button
                                    variant="solid"
                                    bg="teal"
                                    color="white"
                                    _hover={{}}>
                                    Send Message
                                    </Button>
                                </FormControl>
                                </VStack>
                            </Box>
                            </Box>
                    </Box>
                </Flex>

            </Box>
        </Box>
    )
}

export default Contact