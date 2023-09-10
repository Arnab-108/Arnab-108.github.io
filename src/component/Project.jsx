import { Box, Grid, GridItem, Heading } from "@chakra-ui/react"
import Card1 from "./card1"
import Card2 from "./card2"
import Card3 from "./card3"
import Card4 from "./card4"
import AOS from "aos"
import 'aos/dist/aos.css'
AOS.init()
function Project(){
    return(
        <Box  width={"100%"} h="100%" backgroundColor={"#191919"} id="projects"  >
            <Heading pt={"12vh"} margin={"auto"} width={["50vw","40vw","40vw","35vw","30vw"]} fontWeight="semibold" textDecor={"underline"} color={"white"}>My Projects</Heading>
            <Grid m={"10vh auto"} gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)"]} gap={{base:2,md:8,lg:10}} >
                <GridItem data-aos="zoom-in-up"
                 data-aos-duration="500"
                 data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0"
                >
                    <Card1   />
                </GridItem>
                <GridItem data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-back"
                   data-aos-delay="300"
                   data-aos-offset="0"
                >
                    <Card3 />
                </GridItem>
                <GridItem data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-back"
                   data-aos-delay="300"
                   data-aos-offset="0"
                >
                    <Card2 />
                </GridItem>
                <GridItem data-aos="zoom-in-up"
                data-aos-duration="1300"
                data-aos-easing="ease-in-back"
                   data-aos-delay="300"
                   data-aos-offset="0"
                >
                    <Card4 />
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Project