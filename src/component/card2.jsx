import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    LinkOverlay,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function Card2() {
    return (
        <Center className="project-card"  py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '540px' }}
          height={{ sm: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                'https://media-flow.netlify.app/data/img-5.webp'
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}>
            <Heading className="project-title" fontSize={'2xl'} fontFamily={'body'}>
              MediaFlow
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              @Colaborative Project
            </Text>
            <Text
              className="project-description"
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              A clone of Buffer.com , an application designed to manage and schedule posts of different socal media platforms as well as analyze their results and engage with their community.
            </Text>
            <Text
              className="project-tech-stack"
              fontWeight={"semibold"}
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              HTML | CSS | JavaScript
            </Text>
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <a  className="project-deployed-link" href='https://media-flow.netlify.app/' isExternal>
              <Button
                flex={1}
                width="8vw"
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                    bg: 'gray.200',
                }}
                >
                <Text textDecoration={"none"}>
                    Live Site
                </Text>
              </Button>
              </a>
              <a className="project-github-link" href='https://github.com/Arnab-108/spotty-butter-9254' isExternal>
                <Button
                    flex={1}
                    width="8vw"
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'blue.400'}
                    color={'white'}
                    boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                        bg: 'blue.500',
                    }}
                    _focus={{
                        bg: 'blue.500',
                    }}>
                        
                    <Text textDecoration={"none"}>
                      Git Repo
                    </Text>
                        
                </Button>
                </a>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    );
  }