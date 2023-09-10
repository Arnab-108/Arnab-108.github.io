import { Box, Button, Flex, FormControl, FormLabel, Heading, HStack, Input, InputGroup, InputLeftElement, Link, Text, Textarea, VStack } from "@chakra-ui/react";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
function Contact(){
    return(
        <Box  width={"100%"} h="100%"  id="contact" >
            <Heading color={"white"}  pt={"12vh"} fontWeight="semibold" textDecoration="underline">Contact</Heading>
            <Box data-aos="zoom-in-up"
                 data-aos-duration="500"
                 data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0" width={"90%"} height="70%" backgroundColor={"#191919"} margin={{base:"5vh auto",md:"10vh auto",lg:"10vh auto"}}>
                <Flex width={"80vw"} h="65%" gap={"7vw"} flexDirection={{base:"column" , md:"row" , lg:"row"}} justifyContent="center" pos={"relative"} top="3vh" left="5vw"  >
                    <Box color={"white"} width={{base:"100%",md:"50%",lg:"50%"}}>
                        <VStack align="flex-start">
                            <Heading  size={"md"} fontWeight="semibold"  >Get in Touch</Heading>
                            <Text fontSize={{base:"sm",md:"md",lg:"md"}} align={"start"}>Got a project? Reach out and let's work together on something exciting. Big or small. Mobile or web.</Text>
                        </VStack>

                        <VStack align={"flex-start"} mt="5vh" gap={6}>
                            <Link id="contact-email" >
                                <HStack cursor={"pointer"} gap={5}>
                                    <EmailIcon sx={{fontSize:"35px", color:"#92bcb5"}} />
                                    <Text align={"end"} fontSize={{base:"sm",md:"md",lg:"17px"}}>arnabadhikary007@gmail.com</Text>
                                </HStack>
                            </Link>
                            <Link  id="contact-linkedin" href="https://www.linkedin.com/in/arnab-adhikary-80393822a/" isExternal>
                                <HStack cursor={"pointer"} gap={5}>
                                    <LinkedInIcon sx={{fontSize:"35px" , color:"#92bcb5"}} />
                                    <Text align={"end"} fontSize={{base:"sm",md:"md",lg:"17px"}}>Linkedin</Text>
                                </HStack>
                            </Link>
                            <Link id="contact-github" href="https://github.com/Arnab-108" isExternal>
                                <HStack cursor={"pointer"} gap={5}>
                                    <GitHubIcon sx={{fontSize:"35px" , color:"#92bcb5"}} />
                                    <Text align={"end"} fontSize={{base:"sm",md:"md",lg:"17px"}}>Github</Text>
                                </HStack>
                            </Link>
                            <Link  id="contact-phone">
                                <HStack cursor={"pointer"} gap={5}>
                                    <LocalPhoneIcon sx={{fontSize:"35px" , color:"#92bcb5"}} />
                                    <Text align={"end"} fontSize={{base:"sm",md:"md",lg:"17px"}}>+91 9088069205</Text>
                                </HStack>
                            </Link>
                        </VStack>
                    </Box>
                    <Box color={"white"} data-aos="zoom-in-up"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0" width={{base:"100%",md:"50%",lg:"50%"}} mt={{base:"2vh",md:"0vh",lg:"0vh"}}>
                            <Heading align="start" pl={"2vw"} textDecoration="underline" as={"h6"} size={{base:"md",md:"lg",lg:"lg"}} fontWeight="semibold"  >Connect With Me</Heading>
                            <Box backgroundColor={"#191919"} borderRadius="lg">
                            <Box m={8} color="white">
                                <VStack spacing={5}>
                                <FormControl id="name">
                                    <FormLabel fontWeight={{base:"semibold"}}>Your Name</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<PersonOutlineOutlinedIcon sx={{fontSize:"22px"}} />}
                                    />
                                    <Input type="text" size="md" />
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="name">
                                    <FormLabel fontWeight={{base:"semibold"}}>Mail</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<EmailOutlinedIcon sx={{fontSize:"22px"}} />}
                                    />
                                    <Input type="text" size="md" />
                                    </InputGroup>
                                </FormControl>
                                <FormControl id="name">
                                    <FormLabel fontWeight={{base:"semibold"}}>Message</FormLabel>
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
                                    _hover={{}}
                                    onClick={()=>{alert("This feature is Not working Properly! Please do contact me via my email-id , linkedin or phone number")}}
                                    >
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