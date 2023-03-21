import { Box, Grid, GridItem, Heading } from "@chakra-ui/react"
import Card1 from "./card1"
import Card2 from "./card2"

function Project(){
    return(
        <Box  width={"100%"} h="80vh" bgColor="gray.700" id="project" >
            <Heading pt={"4vh"} fontWeight="semibold" textDecoration="underline" color={"white"}>Project</Heading>
            <Grid m={"10vh auto"} gridTemplateColumns={"repeat(2,1fr)"} gap={10} >
                <GridItem>
                    <Card1 />
                </GridItem>
                <GridItem>
                    <Card2 />
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Project