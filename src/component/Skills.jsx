import { Box, Grid, GridItem, Heading ,Image, Text, VStack } from "@chakra-ui/react";

function Skills(){
    return (
        <Box h={"96vh"} w="100%" id="skills" className="skills-card">
            <Heading pt={"5vh"} textDecoration={"underline"}  fontWeight="semibold">My Skills</Heading>
            <Grid gridTemplateColumns="repeat(3,1fr)" gap={14} m="7vh 17vw" width="70vw" >
                <GridItem className="skills-card" cursor={"pointer"} _hover={{boxSize:"230px" , boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} >
                    <VStack>
                        <Image 
                        className="skills-card-img"
                        boxSize='200px'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png'
                        alt='Dan Abramov'
                        />
                        <Text className="skills-card-name">HTML</Text>

                    </VStack>
                </GridItem>
                <GridItem className="skills-card" cursor={"pointer"} _hover={{boxSize:"230px" , boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} >
                    <VStack>
                        <Image 
                        className="skills-card-img"
                        boxSize='200px'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'
                        alt='Dan Abramov'
                        />
                        <Text className="skills-card-name">CSS</Text>
                    </VStack>
                </GridItem>
                <GridItem className="skills-card" cursor={"pointer"} _hover={{boxSize:"230px" , boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} >
                    <VStack>
                        <Image 
                            className="skills-card-img"
                            boxSize='200px'
                            src='https://w1.pngwing.com/pngs/136/126/png-transparent-javascript-logo-angularjs-nodejs-computer-programming-web-development-computer-software-jquery-yellow.png'
                            alt='Dan Abramov'
                            
                        />
                        <Text className="skills-card-name">JavaScript</Text>
                    </VStack>
                </GridItem>
                <GridItem className="skills-card" cursor={"pointer"} _hover={{boxSize:"230px" , boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
                    <VStack>
                            <Image 
                            className="skills-card-img"
                            boxSize='200px'
                            src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
                            alt='Dan Abramov'
                            cursor={"pointer"}
                            
                            />
                            <Text className="skills-card-name">REACT</Text>

                    </VStack>
                </GridItem>
                <GridItem className="skills-card" cursor={"pointer"} _hover={{boxSize:"230px" , boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} >
                    <VStack>
                        <Image 
                        className="skills-card-img"
                        boxSize='200px'
                        src='https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png'
                        alt='Dan Abramov'
                        />
                        <Text className="skills-card-name">Node Js</Text>
                    </VStack>
                </GridItem>
                <GridItem className="skills-card" cursor={"pointer"} _hover={{boxSize:"230px" , boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} >
                    <VStack>
                    <Image 
                    className="skills-card-img"
                     boxSize='200px'
                     src='data:image/png;base64,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'
                     alt='Dan Abramov'
                    />
                    <Text className="skills-card-name">REDUX</Text>
                    </VStack>
                    
                </GridItem>
                
            </Grid>
        </Box>
    )
}

export default Skills