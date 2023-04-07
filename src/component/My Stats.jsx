import { Box, Flex, Heading, Image, VStack } from "@chakra-ui/react"
import { borderRadius, textAlign, width } from "@mui/system";
import GitHubCalendar from 'react-github-calendar';
function Mystats(){
    return(
        <>
            <Box width={"100%"} h="138vh" bgColor="gray.700">
                <Heading width={"30vh"} pt={"4vh"} margin={"auto"} fontWeight="semibold" borderBottom={"3px solid white"} color={"white"}>My Statistics</Heading>
                <VStack mt={"10vh"} gap={"7vh"}>
                    <Flex mt="5vh" ml={"10vw"} align={"center"} >
                        <Image id="github-stats-card"    width={"55vw"} height={"30vh"} src="https://github-readme-stats.vercel.app/api?username=Arnab-108" />
                        <Image id="github-top-langs" pos={"relative"} right={"13vw"} width={"40vw"} height={"30vh"} src="https://github-readme-stats.vercel.app/api/top-langs/?username=Arnab-108&layout=compact" />
                    </Flex>
                        <Image id="github-streak-stats"  height={"30vh"} src="https://github-readme-streak-stats.herokuapp.com/demo/preview.php?user=Arnab-108&theme=vue" />
                        <Box  >
                            <Heading fontWeight="semibold" color={"white"}>Calendar</Heading>
                            <GitHubCalendar className="react-activity-calendar"  style={{color:"white" ,textAlign:"center" ,paddingTop:"5vh"}}  username="Arnab-108" />
                        </Box>
                </VStack>
            </Box>
        
        </>
    )
}

export default Mystats