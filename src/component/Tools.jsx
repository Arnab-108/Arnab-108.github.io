import { Box, Grid, GridItem, Heading ,Image, Text, VStack } from "@chakra-ui/react";

function Tools(){
    return (
        <Box h={["100%","100%","100%","90vh"]} w="100%" id="skills" className="skills-card" backgroundColor={"#191919"}>
            <Heading pt={"12vh"} margin={"auto"} size={"lg"} width={["30vw","20vw","md","20vw","10vw"]} fontWeight="semibold" textDecoration="underline" color={"white"}>Tools</Heading>
            <Grid gridTemplateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(4,1fr)"}} gap={5} m="14vh 17vw" width="70vw" backgroundColor={"black"} borderRadius={"7px"} paddingLeft={["5vw"]} paddingRight={"4vw"}>
                <GridItem width={["100%","100%","100%","10vw"]} pt={"2vh"}  className="skills-card" cursor={"pointer"} 
                // _hover={{boxSize:"230px" , boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} 
                >
                    <VStack>
                        <Image 
                        className="skills-card-img"
                        boxSize='80px'
                        src='https://img.icons8.com/?size=512&id=52539&format=png'
                        alt='Dan Abramov'
                        />
                        <Text className="skills-card-name" color={"white"}>GitHub</Text>

                    </VStack>
                </GridItem>
                <GridItem width={["100%","100%","100%","10vw"]} pt={"2vh"} className="skills-card" cursor={"pointer"}  >
                    <VStack>
                        <Image 
                        className="skills-card-img"
                        boxSize='80px'
                        src='https://img.icons8.com/color/256/npm.png'
                        alt='Dan Abramov'
                        />
                        <Text className="skills-card-name" color={"white"}>NPM</Text>
                    </VStack>
                </GridItem>
                <GridItem width={["100%","100%","100%","10vw"]} marginRight={"2vw"} pt={"5vh"} className="skills-card" cursor={"pointer"} >
                    <VStack>
                        <Image 
                            className="skills-card-img"
                            boxSize='80px'
                            src='https://user-images.githubusercontent.com/2676579/34940598-17cc20f0-f9be-11e7-8c6d-f0190d502d64.png'
                            alt='Dan Abramov'
                            
                        />
                        <Text className="skills-card-name" color={"white"}>Postman</Text>
                    </VStack>
                </GridItem>
                <GridItem width={["100%","100%","100%","10vw"]}  pt={"4vh"} className="skills-card" cursor={"pointer"}>
                    <VStack>
                            <Image 
                            className="skills-card-img"
                            boxSize='80px'
                            src='https://img.icons8.com/?size=512&id=9OGIyU8hrxW5&format=png'
                            alt='Dan Abramov'
                            cursor={"pointer"}
                            
                            />
                            <Text className="skills-card-name" color={"white"}>VsCode</Text>

                    </VStack>
                </GridItem>
                <GridItem width={["100%","100%","100%","10vw"]} paddingBottom={"2vh"} className="skills-card" cursor={"pointer"} >
                    <VStack>
                    <Image 
                    className="skills-card-img"
                     boxSize='80px'
                     src='https://cpwebassets.codepen.io/assets/social/facebook-default-05cf522ae1d4c215ae0f09d866d97413a2204b6c9339c6e7a1b96ab1d4a7340f.png'
                     alt='Dan Abramov'
                    />
                    <Text className="skills-card-name" color={"white"}>Codepen</Text>
                    </VStack>
                    
                </GridItem>
                <GridItem width={["100%","100%","100%","10vw"]} paddingBottom={"2vh"} className="skills-card" cursor={"pointer"} >
                    <VStack>
                        <Image 
                        className="skills-card-img"
                        boxSize='80px'
                        src='https://cdn.iconscout.com/icon/free/png-256/netlify-3629537-3032320.png'
                        alt='Dan Abramov'
                        />
                        <Text className="skills-card-name" color={"white"}>Netlify</Text>
                    </VStack>
                </GridItem>
                <GridItem width={["100%","100%","100%","10vw"]} paddingBottom={"2vh"} className="skills-card" cursor={"pointer"} >
                    <VStack>
                    <Image 
                    className="skills-card-img"
                     boxSize='80px'
                     src='data:image/png;base64,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'
                     alt='Dan Abramov'
                    />
                    <Text className="skills-card-name" color={"white"}>Vercel</Text>
                    </VStack>
                    
                </GridItem>
                <GridItem width={["100%","100%","100%","10vw"]} paddingBottom={"2vh"} className="skills-card" cursor={"pointer"} >
                    <VStack>
                    <Image 
                    className="skills-card-img"
                     boxSize='80px'
                     src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX////yYgfyYADyXADxVwD60ML3pIbzcTH4s5f0g0z5vqbzdTLxUQDxVQDxUADyYQD1iVj+9vH6zbv83M/1lGn2mnP5waz4tZn2oHz5uqH72Mnzbyj84db4r5L1jF/0eTz0f0f97+jzaBg0ctoKAAACcUlEQVR4nO3c3XLaMBRFYcsy0IBkfkwdWuqG5P0fspDc5EokljpbnFnrCfyNB5kZn+OmISIiIiIiIiIiIiIievAWp8vq22120x/1hX+xcRt9OyPvw2pQX/xXusStm1vbn9SXf7+zn+27FY9qwL2e8oBX4rOakO4QM4HOhVc1Itlbmy30P9WIVEP+LXTbTq1INeX+Cm/Fmh8ZxxLCblQzEmWfpLd8zafpU/5BcxX+UDMSIUSIUB9ChAj1IUSIUB9ChAj1IUSIUB9ChAj1IUSIUB9ChAj1IXx84a7Ie/yahSfzwrGzLtwH68IiI0N1C/dh/vjsYwibQ29d2Ix97jOxdmEzuC7PWL2wadabPnbz6+sXXg+cYZHRr2VG02Gv1t9vHXxGXdhVv5myzvxn5MNSTbhTrtC5bqc2pMsXuq7qgf8SQhd+qxWpSgjbs1qRqoTQhZoP1CJCP6kZicoI/6oZiYoI2xc1I1EZ4UbNSIQQIUJ9CBEi1IcQIUJ9CBEi1IcQIUJ9CBEi1IcQIUJ9CBEi1IcQ4YfQ/Ht8+7MY9udpzM9E2Z9rMz+baH6+1PqM8APMeT/ArL71fYv1yvbOjPm9J/O7a+b3D+3vkJrfA7a/y21/H9/+NxXsfxfD/rdNECJEqA8hQoT6ECJEqA8hQoT6ECJEqA8hQoT6ECJEqA8hQoT6EBoQFnmP/6xmJCoxMOS6Uc1INJUQxkHNSDTEfOC2UyuSveUfNb7uMftD/k0Mr2pEuuzTNNZ8kr53ziPGoxpwv0ucP0Tb9rVvSrw3bqNvZ+R92NT8oPjcYnlZfbvNbqp5oY6IiIiIiIiIiIiIiOi/9g+CXE0DtWMwzAAAAABJRU5ErkJggg=='
                     alt='Dan Abramov'
                    />
                    <Text className="skills-card-name" color={"white"} >Replit</Text>
                    </VStack>
                    
                </GridItem>
                
            </Grid>
        </Box>
    )
}

export default Tools