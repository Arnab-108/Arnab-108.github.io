import { Box, Heading, Text, VStack,Button } from "@chakra-ui/react";
// import Arnab_Adhikary_Resume from "./Arnab_Adhikary_Resume.pdf"
import Arnab_Adhikary from "./Arnab Adhikary-Full Stack Web Developer.pdf"
import photo from "./photo2.jpg"
function Home(){
    return (
        <>
            <Box 
            width="100%" 
            height="100vh" 
            id="home"
            bgImage={photo}
            bgRepeat={"no-repeat"}
            bgPos={"center"}
            bgSize={"cover"}
            
            >
                <VStack width={"55vw"} height="50%" color={"white"}   align="flex-start" gap={["5px","10px","20px"]} pos="relative" top={{base:"50vh",lg:"44vh"}} left="33vw">
                    <Text fontSize={{base:"md",md:"lg",lg:"3xl"}}>Hello I am a,</Text>
                    <Heading as="h1" size={["xs","sm","lg","lg","2xl"]}>Full Stack Web Developer</Heading>
                    <Button id="resume-button-2" mr="10vw" colorScheme='teal' size='lg' className="nav-link resume" onClick={()=>{
                        window.open(
                            "https://drive.google.com/file/d/1R9IxK8mk5jwEj6CC83krfDcRAv74nfX5/view?usp=share_link",
                            "_blank"
                        )
                    }}>
                        <a id="resume-link-2"
                            href={Arnab_Adhikary}
                            target="_blank"
                            rel="noreferrer"
                            download={"Arnab Adhikary-Full Stack Web Developer.pdf"}
                        >
                            Resume
                        </a>
                    </Button>
                </VStack>
            </Box>
        </>
    )
}

export default Home

//#f47878