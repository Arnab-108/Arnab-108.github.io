import { Image, Box, Flex, Heading , Text, VStack} from "@chakra-ui/react";
import Typed from 'react-typed';
import photo from "./photo.jpg"
import photo1 from "./photo4.png"
import photo2 from "./photo5.png"
function About(){
    return (
        <div >
        <Box  width={"100%"} h="110vh" backgroundColor={"#191919"} id="about" className="about section" >
            <Heading pt={"12vh"} fontWeight="semibold" textDecoration="underline" color={"white"}>About Me</Heading>
            <Flex width={"80vw"} align={{base:"center",md:"center"}} flexDir={{base:"column",md:"column",lg:"row"}} h="65vh" gap={{base:"1vh",md:"1vh",lg:"7vw"}} justifyContent="center" pos={"relative"} top="10vh" left="10vw"  >
                <Box
                width={{lg:"60vw"}} 
                h={{lg:"80%"}} 
                data-aos="zoom-in-up"
                 data-aos-duration="500"
                 data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0"
                >
                    <Image 
                        borderRadius={{base:"100%",md:"100%",lg:"100%"}}
                        boxSize={["250px","250px",'280px',"300px","sm"]}
                        src={photo}
                        alt='Dan Abramov'
                        className="home-img"
                    />

                </Box>
                <Box
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-back"
                   data-aos-delay="300"
                   data-aos-offset="0"
                 color={"white"}>
                    <VStack align={"flex-start"} 
                    width={{lg:"40vw"}} 
                    pos={"relative"} 
                    top={{base:"7vh",md:"5vh",lg:"10vh"}}>
                        <Heading size={{base:"lg",md:"lg",lg:"2xl"}} fontWeight="semibold"  id="user-detail-name">Hi, I am <span style={{color:"yellow"}}>Arnab</span>,</Heading>
                        <Text fontSize={{base:"md",md:"md",lg:"2xl"}} color={"yellow"} fontWeight="semibold">
                        <Typed
                        strings={[
                            'I am a Coder',
                            'A full-stack Developer',
                            'A Tech-Enthusiast|']}
                            typeSpeed={40}
                            backSpeed={50}
                            loop >
                        </Typed>
                        </Text>
                        
                        <Text fontSize={{base:"12px",md:"sm",lg:"md"}} align="start" id="user-detail-intro">
                            Innovative, result-oriented Full-Stack Web Developer with a
                            good grasp of React Framework and other web
                            development tools like HTML , CSS , JS. Have the
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