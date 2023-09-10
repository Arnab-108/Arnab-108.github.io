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

  
  export default function Card1() {
    return (
      <Center  className="project-card" py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          justify={"center"}
          w={{ base: '90%', md:'90%' }}
          height={{ base:'100%', md:'100%',lg:"21rem" }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}
          
          >
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                'https://images.hindustantimes.com/auto/img/2021/12/28/600x338/Indian_cars_1640662074513_1640662081298.jpg'
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            gap={1}
            pt={2}>
            <Heading className="project-title" fontSize={'2xl'} fontFamily={'body'}>
              Byecars_BUYC
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              @Individual Project
            </Text>
            <Text
              className="project-description"
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              A car deals project, where a dealer can post their cars , in order to sell them.
            </Text>
            <Text
              className="project-tech-stack"
              fontWeight={"semibold"}
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              React | Chakra Ui | Redux | MongoDB | Express | JWT | Bcrypt
            </Text>
            <Stack
              width={'100%'}
              pt={'4vh'}
              direction={'row'}
              //padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
            <a  className="project-deployed-link" href='https://byecars.netlify.app/' target='_blank' >
              <Button
                flex={1}
                width={{base:"19vw",md:"10vw",lg:"8vw"}}
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
            <a className="project-github-link" href='https://github.com/Arnab-108/Byecars_BUYC' target='_blank'>
                <Button
                    flex={1}
                    width={{base:"19vw",md:"10vw",lg:"8vw"}}
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