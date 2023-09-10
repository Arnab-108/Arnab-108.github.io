import { Box, Grid, GridItem, Heading ,Image, Text, VStack } from "@chakra-ui/react";

function Skills(){
    return (
        <Box h={["100%","100%","100%","110vh"]} w="100%" id="skills" backgroundColor={"#191919"} className="skills-card">
            <Heading pt={"12vh"} margin={"auto"} size={"lg"} width={["30vw","20vw","md","20vw","10vw"]} fontWeight="semibold" textDecoration="underline" color={"white"}>My Skills</Heading>
            <Grid gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(4,1fr)"}} gap={5} m="14vh 17vw" width="70vw" paddingLeft={"5vw"} borderRadius={"7px"} paddingRight={"4vw"} backgroundColor={"black"} >
                <GridItem pt={"3vh"} className="skills-card" cursor={"pointer"} 
                // _hover={{boxSize:"230px" , boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} 
                >
                    <VStack>
                        <Image 
                        className="skills-card-img"
                        boxSize='80px'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png'
                        alt='Dan Abramov'
                        />
                        <Text color={"white"} className="skills-card-name">HTML</Text>

                    </VStack>
                </GridItem>
                <GridItem pt={"3vh"} className="skills-card" cursor={"pointer"}  >
                    <VStack>
                        <Image 
                        className="skills-card-img"
                        boxSize='80px'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'
                        alt='Dan Abramov'
                        />
                        <Text color={"white"} className="skills-card-name">CSS</Text>
                    </VStack>
                </GridItem>
                <GridItem pt={"3vh"} className="skills-card" cursor={"pointer"} >
                    <VStack>
                        <Image 
                            className="skills-card-img"
                            boxSize='80px'
                            src='https://w1.pngwing.com/pngs/136/126/png-transparent-javascript-logo-angularjs-nodejs-computer-programming-web-development-computer-software-jquery-yellow.png'
                            alt='Dan Abramov'
                            
                        />
                        <Text color={"white"} className="skills-card-name">JavaScript</Text>
                    </VStack>
                </GridItem>
                <GridItem pt={"3vh"} className="skills-card" cursor={"pointer"}>
                    <VStack>
                            <Image 
                            className="skills-card-img"
                            boxSize='80px'
                            src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
                            alt='Dan Abramov'
                            cursor={"pointer"}
                            
                            />
                            <Text color={"white"} className="skills-card-name">React</Text>

                    </VStack>
                </GridItem>
                <GridItem className="skills-card" cursor={"pointer"} >
                    <VStack>
                    <Image 
                    className="skills-card-img"
                     boxSize='80px'
                     src='https://img.icons8.com/color/256/redux.png'
                     alt='Dan Abramov'
                    />
                    <Text color={"white"} className="skills-card-name">Redux</Text>
                    </VStack>
                    
                </GridItem>
                <GridItem className="skills-card" cursor={"pointer"} >
                    <VStack>
                        <Image 
                        className="skills-card-img"
                        boxSize='80px'
                        src='https://img.icons8.com/color/512/mongodb.png'
                        alt='Dan Abramov'
                        />
                        <Text color={"white"} className="skills-card-name">MongoDB</Text>
                    </VStack>
                </GridItem>
                <GridItem className="skills-card" cursor={"pointer"} >
                    <VStack>
                    <Image 
                    className="skills-card-img"
                     boxSize='80px'
                     src='https://img.icons8.com/?size=512&id=2ZOaTclOqD4q&format=png'
                     alt='Dan Abramov'
                    />
                    <Text color={"white"} className="skills-card-name">Express Js</Text>
                    </VStack>
                    
                </GridItem>
                <GridItem className="skills-card" cursor={"pointer"} >
                    <VStack>
                    <Image 
                    className="skills-card-img"
                     boxSize='80px'
                     src='https://img.icons8.com/color/256/nodejs.png'
                     alt='Dan Abramov'
                    />
                    <Text color={"white"} className="skills-card-name">Node Js</Text>
                    </VStack>
                    
                </GridItem>
                <GridItem paddingBottom={"3vh"} className="skills-card" cursor={"pointer"} >
                    <VStack>
                    <Image 
                    className="skills-card-img"
                     boxSize='80px'
                     src='https://img.icons8.com/color/256/chakra-ui.png'
                     alt='Dan Abramov'
                    />
                    <Text color={"white"} className="skills-card-name">Chakra UI</Text>
                    </VStack>
                    
                </GridItem>
                
                <GridItem paddingBottom={"3vh"} className="skills-card" cursor={"pointer"}>
                    <VStack>
                            <Image 
                            className="skills-card-img"
                            boxSize='80px'
                            src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
                            alt='Dan Abramov'
                            cursor={"pointer"}
                            
                            />
                            <Text color={"white"} className="skills-card-name">React-Native</Text>

                    </VStack>
                </GridItem>
                
                <GridItem paddingBottom={"3vh"} className="skills-card" cursor={"pointer"}>
                    <VStack>
                            <Image 
                            className="skills-card-img"
                            boxSize='80px'
                            src='data:image/png;base64,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'
                            alt='Dan Abramov'
                            cursor={"pointer"}
                            
                            />
                            <Text color={"white"} className="skills-card-name">Django</Text>

                    </VStack>
                </GridItem>
                <GridItem paddingBottom={"3vh"} className="skills-card" cursor={"pointer"}>
                    <VStack>
                            <Image 
                            className="skills-card-img"
                            boxSize='80px'
                            src='data:image/jpeg;base64,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'
                            alt='Dan Abramov'
                            cursor={"pointer"}
                            
                            />
                            <Text color={"white"} className="skills-card-name">Python</Text>

                    </VStack>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Skills