import { Box, Flex, Heading, Image, VStack } from "@chakra-ui/react"
import { borderRadius, textAlign, width } from "@mui/system";
import GitHubCalendar from 'react-github-calendar';
function Mystats(){
    return(
        <>
            <Box width={"100%"} h="100%" backgroundColor={"#191919"}>
                <Heading width={{base:"40vw",md:"30vw",lg:"30vw"}} pt={"4vh"} margin={"auto"}  fontWeight="semibold" borderBottom={"3px solid white"} color={"white"}>My Statistics</Heading>
                <VStack mt={{base:"3vh",md:"10vh"}} gap={{base:"3vh",md:"7vh",lg:"7vh"}}>
                    <Flex mt="5vh" ml={{base:"0",md:"10vw"}} flexDirection={["column","column","column","column","row"]} align={"center"} >
                        <Image data-aos="zoom-in-up"
                 data-aos-duration="500"
                 data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0" id="github-stats-card"    width={{base:"100%",md:"55vw"}} height={{base:"20vh",md:"30vh"}} src="https://github-readme-stats.vercel.app/api?username=Arnab-108" />
                        <Image data-aos="zoom-in-up"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0" id="github-top-langs" pos={"relative"} top={{base:"5vh",md:"0"}} right={{base:"0",md:"13vw"}} width={{base:"100%",md:"40vw"}} height={{base:"20vh",md:"30vh"}} src="https://github-readme-stats.vercel.app/api/top-langs/?username=Arnab-108&layout=compact" />
                    </Flex>
                        <Image data-aos="zoom-in-up"
                 data-aos-duration="1100"
                 data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0" id="github-streak-stats" pos={"relative"} top={{base:"5vh",md:"0"}}  height={{base:"20vh",md:"30vh"}} src="https://github-readme-streak-stats.herokuapp.com/demo/preview.php?user=Arnab-108&theme=vue" />
                        <Box pos={"relative"} top={{base:"2vh",md:"0"}} >
                            <Heading  fontWeight="semibold" color={"white"}>Calendar</Heading>
                            <Box data-aos="zoom-in-up"
                 data-aos-duration="500"
                 data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0">
                            <GitHubCalendar className="react-activity-calendar"  style={{color:"white" ,textAlign:"center" ,paddingTop:"1vh", width:"90%",margin:"auto"}}  username="Arnab-108" />
                            </Box>
                            
                        </Box>
                </VStack>
            </Box>
        
        </>
    )
}

export default Mystats