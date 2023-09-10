import { Flex, Box, Spacer, Avatar, Text, Input, HStack, InputRightElement, IconButton, InputGroup, Button, ButtonGroup, Heading, Link } from "@chakra-ui/react"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { HashLink as NavLink } from "react-router-hash-link"
import Arnab_Adhikary_Resume from "./Arnab_Adhikary_Resume.pdf"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import { useState } from "react";
function Navbar() {
    const [display, changeDisplay] = useState("none")
    return (
        <div >
            <Flex bgColor="white" boxShadow="0 0 5px rgba(0,0,0,.2)" minWidth='max-content' alignItems='center' w="100%" h="8vh" pos="fixed" zIndex={2} id="nav-menu">
                <Box p='2' ml="5vw">
                    <Heading cursor="pointer" as="h1" size={["md","md","md","md","lg" ]} fontWeight="medium">Arnab Adhikary</Heading>
                </Box>
                <Spacer />
                <Flex gap="4vw" display={["none", "none", "none", "flex"]}>
                    <Box cursor="pointer" _hover={{ border: "2px solid teal", color: "teal" }}>
                        <NavLink to="#home" smooth className="nav-link home" >
                            <Text fontWeight={"semibold"} fontSize={{ sm: "sm", md: "md", lg: "lg" }}>Home</Text>
                        </NavLink>
                    </Box>
                    <Box cursor="pointer" _hover={{ border: "2px solid teal", color: "teal" }}>
                        <NavLink to="#about" smooth className="nav-link about" >
                            <Text fontWeight={"semibold"} fontSize={{ sm: "sm", md: "md", lg: "lg" }}>About</Text>
                        </NavLink>
                    </Box>
                    <Box cursor="pointer" _hover={{ border: "2px solid teal", color: "teal" }}>
                        <NavLink to="#skills" smooth className="nav-link skills"  >
                            <Text fontWeight={"semibold"} fontSize={{ sm: "sm", md: "md", lg: "lg" }}>Skills</Text>
                        </NavLink>
                    </Box>
                    <Box cursor="pointer" _hover={{ border: "2px solid teal", color: "teal" }}>
                        <NavLink to="#projects" smooth className="nav-link projects" >
                            <Text fontWeight={"semibold"} fontSize={{ sm: "sm", md: "md", lg: "lg" }}>Projects</Text>
                        </NavLink>
                    </Box>
                    <Box cursor="pointer" _hover={{ border: "2px solid teal", color: "teal" }}>
                        <NavLink to="#contact" smooth className="nav-link contact" >
                            <Text fontWeight={"semibold"} fontSize={{ sm: "sm", md: "md", lg: "lg" }}>Contact-me</Text>
                        </NavLink>
                    </Box>
                </Flex>
                <IconButton
                    aria-label="Open Menu"
                    size={{base:"md",md:"md"}}
                    icon={<MenuIcon />}
                    display={["flex", "flex", "flex", "none"]}
                    pos={"relative"}
                    left={{base:"18vw",md:"30vw"}}
                    onClick={() => {
                        changeDisplay("flex")
                    }}
                />
                <Spacer />
                <Button display={["none", "none", "none", "flex"]} id="resume-button-1" mr={["none", "5vw", "5vw", "10vw"]} colorScheme='teal' size='md' className="nav-link resume" onClick={() => {
                    window.open(
                        "https://drive.google.com/file/d/1R9IxK8mk5jwEj6CC83krfDcRAv74nfX5/view?usp=share_link",
                        "_blank"
                    )
                }}>
                    <a id="resume-link-1"
                        href={Arnab_Adhikary_Resume}
                        target="_blank"
                        download={"Arnab_Adhikary_Resume.pdf"}
                    >
                        <Flex gap={2}>
                            <Text>Resume</Text>
                            <DownloadIcon />
                        </Flex>
                    </a>
                </Button>

            </Flex>
            <Flex
                bgColor={"white"}
                w={"100%"}
                zIndex={20}
                height={"50vh"}
                pos={"fixed"}
                top={"0"}
                left={"0"}
                overflow={"auto"}
                flexDirection={"column"}
                display={display}
                boxShadow="0 0 5px rgba(0,0,0,.2)"
            >
                <Flex justify={"flex-end"}>
                    <IconButton
                        mt={2}
                        mr={"2vw"}
                        aria-label="Close Menu"
                        size={"lg"}
                        icon={<CloseIcon />}
                        onClick={() => {
                            changeDisplay("none")
                        }}
                    />
                </Flex>
                <Flex gap={["3vh", "3vh", "25px", "0"]} flexDirection={"column"} align={"center"}>
                    <Box cursor="pointer" _hover={{ border: "2px solid teal", color: "teal" }}>
                        <NavLink to="#home" smooth >
                            <Text fontWeight={"semibold"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>Home</Text>
                        </NavLink>
                    </Box>
                    <Box cursor="pointer" _hover={{ border: "2px solid teal", color: "teal" }}>
                        <NavLink to="#about" smooth >
                            <Text fontWeight={"semibold"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>About</Text>
                        </NavLink>
                    </Box>
                    <Box cursor="pointer" _hover={{ border: "2px solid teal", color: "teal" }}>
                        <NavLink to="#skills" smooth  >
                            <Text fontWeight={"semibold"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>Skills</Text>
                        </NavLink>
                    </Box>
                    <Box cursor="pointer" _hover={{ border: "2px solid teal", color: "teal" }}>
                        <NavLink to="#projects" smooth >
                            <Text fontWeight={"semibold"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>Projects</Text>
                        </NavLink>
                    </Box>
                    <Box cursor="pointer" _hover={{ border: "2px solid teal", color: "teal" }}>
                        <NavLink to="#contact" smooth >
                            <Text fontWeight={"semibold"} fontSize={{ base: "sm", md: "md", lg: "lg" }}>Contact-me</Text>
                        </NavLink>
                    </Box>
                    <Box >
                            <Button  colorScheme='teal' size='md' onClick={() => {
                                window.open(
                                    "https://drive.google.com/file/d/1R9IxK8mk5jwEj6CC83krfDcRAv74nfX5/view?usp=share_link",
                                    "_blank"
                                )
                            }}>
                                <a
                                    href={Arnab_Adhikary_Resume}
                                    target="_blank"
                                    download={"Arnab_Adhikary_Resume.pdf"}
                                >
                                    <Flex gap={2}>
                                        <Text>Resume</Text>
                                        <DownloadIcon />
                                    </Flex>
                                </a>
                            </Button>
                    </Box>
                </Flex>
            </Flex>
        </div>
    )
}

export default Navbar