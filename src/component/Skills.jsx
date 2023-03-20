import { Box, Grid, GridItem, Heading ,Image } from "@chakra-ui/react";

function Skills(){
    return (
        <Box h={"80vh"} w="100%" bgColor="gray.200">
            <Heading pt={"5vh"} textDecoration={"underline"}  fontWeight="semibold">My Skills</Heading>
            <Grid gridTemplateColumns="repeat(3,1fr)" gap={7} m="7vh 18vw" >
                <GridItem>
                    <Image 
                     boxSize='200px'
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0QKLUOEdyjA9dxmjOdihDpSPNveA9vvbALw&usqp=CAU'
                     alt='Dan Abramov'
                    />
                </GridItem>
                <GridItem>
                    <Image 
                     boxSize='200px'
                     src='data:image/png;base64,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'
                     alt='Dan Abramov'
                    />
                </GridItem>
                <GridItem>
                    <Image 
                        boxSize='200px'
                        src='data:image/png;base64,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'
                        alt='Dan Abramov'
                    />
                </GridItem>
                <GridItem>
                <Image 
                     boxSize='200px'
                     src='https://bit.ly/dan-abramov'
                     alt='Dan Abramov'
                    />
                </GridItem>
                <GridItem>
                <Image 
                     boxSize='200px'
                     src='https://bit.ly/dan-abramov'
                     alt='Dan Abramov'
                    />
                </GridItem>
                <GridItem>
                <Image 
                     boxSize='200px'
                     src='https://bit.ly/dan-abramov'
                     alt='Dan Abramov'
                    />
                </GridItem>
                
            </Grid>
        </Box>
    )
}

export default Skills