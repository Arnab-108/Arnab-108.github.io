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
  
  export default function Card3() {
    return (
        <Center className="project-card"  py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ base: '90%', md: '90%' }}
          height={{ base: '100%', md: '100%',lg:"20rem" }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}>
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                'https://assets.basspro.com/image/upload/c_scale,f_auto,q_auto,w_945/v1677858198/DigitalCreative/2023/Campaigns/wk09-3-9/Homepage/sfc_homepage_sub_rodreels_bps.png'
              }
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
            p={1}
            pt={2}>
            <Heading className="project-title" fontSize={'2xl'} fontFamily={'body'}>
              Tackle & Trail
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              @Colaborative Project
            </Text>
            <Text
              className="project-description"
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              Tackle & Trail is a clone of an e-commerce website Basspro which sells quality fishing, hunting, boating and outdoor sporting goods.
            </Text>
            <Text
              className="project-tech-stack"
              fontWeight={"semibold"}
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              React | Redux | Chakra Ui
            </Text>
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
              <a  className="project-deployed-link" href='https://tackle-and-trail.netlify.app/' target='_blank'>
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
              <a className="project-github-link" href='https://github.com/Ajay84sia/auspicious-sea-8816' target='_blank'>
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