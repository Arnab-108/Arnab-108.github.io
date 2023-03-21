import {Flex,Box,Spacer, Avatar,Text, Input, HStack,InputRightElement , IconButton, InputGroup, Button, ButtonGroup, Heading,Link } from "@chakra-ui/react"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {HashLink as NavLink} from "react-router-hash-link"
function Navbar(){
    return(
        <>
            <Flex bgColor="teal.400" minWidth='max-content' alignItems='center' w="100%" h="10vh" pos="fixed" zIndex={2}>
                <Box p='2' ml="5vw">
                    <Heading cursor="pointer" as="h1" size="lg" fontWeight="medium">Arnab Adhikary</Heading>
                </Box>
                <Spacer />
                <Flex  gap="4vw">
                    <Box cursor="pointer" _hover={{border:"4px solid grey",color:"white"}}>
                        <NavLink to="#home" smooth >
                            <Text fontSize="lg">Home</Text>
                        </NavLink>
                    </Box>
                    <Box cursor="pointer" _hover={{border:"4px solid grey",color:"white"}}>
                        <NavLink to="#about" smooth >
                            <Text fontSize="lg">About</Text>
                        </NavLink>
                    </Box>
                    <Box cursor="pointer" _hover={{border:"4px solid grey",color:"white"}}>
                        <NavLink to="#skills" smooth >
                            <Text fontSize="lg">Skills</Text>
                        </NavLink>
                    </Box>
                    <Box cursor="pointer" _hover={{border:"4px solid grey",color:"white"}}>
                        <NavLink to="#contact" smooth>
                            <Text fontSize="lg">Contact-me</Text>
                        </NavLink>
                    </Box>
                    <Box cursor="pointer" _hover={{border:"4px solid grey",color:"white"}}>
                        <NavLink to="#project" smooth >
                            <Text fontSize="lg">Projects</Text>
                        </NavLink>
                    </Box>
                </Flex>
                <Spacer />
                <Button mr="10vw" colorScheme='teal' size='lg'>
                   + Resume
                </Button>
            </Flex>
            
        </>
    )
}

export default Navbar