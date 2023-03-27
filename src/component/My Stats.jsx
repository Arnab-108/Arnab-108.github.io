import { Box, Flex, Heading, Image, VStack } from "@chakra-ui/react"
import { borderRadius, textAlign, width } from "@mui/system";
import GitHubCalendar from 'react-github-calendar';
function Mystats(){
    return(
        <>
            <Box width={"100%"} h="100%" bgColor="gray.700">
                <Heading pt={"4vh"} fontWeight="semibold" textDecoration="underline" color={"white"}>My Statistics</Heading>
                <VStack gap={"5vh"}>
                    <Flex mt="5vh" ml={"10vw"} align={"center"} >
                        <Image  id="github-streak-stats"  width={"55vw"} height={"30vh"} src="https://github-readme-stats.vercel.app/api?username=Arnab-108" />
                        <Image id="github-top-langs" pos={"relative"} right={"13vw"} width={"40vw"} height={"30vh"} src="https://github-readme-stats.vercel.app/api/top-langs/?username=Arnab-108&layout=compact" />
                    </Flex>
                        <Image id="github-streak-stats" width={"55vw"} height={"30vh"} src="https://github-readme-streak-stats.herokuapp.com/demo/preview.php?user=Arnab-108&theme=vue" />
                        <Box  >
                            <GitHubCalendar className="react-activity-calendar"  style={{color:"white" , height:"50vh" ,textAlign:"center"}}  username="Arnab-108" />
                        </Box>
                </VStack>
            </Box>
        
        </>
    )
}

export default Mystats