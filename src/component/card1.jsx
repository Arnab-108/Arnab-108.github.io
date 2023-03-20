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
      <Center py={6}>
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
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzt9RUONK77llsRosDC3upcwFCv8djlEHhag&usqp=CAU'
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
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              BabyBags 
            </Heading>
            <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
              @Individual Project
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              Babybags a clone of Carter's.com is an e-commerce website that sells
              different types of garments for kids.
            </Text>
  
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'space-between'}
              alignItems={'center'}>
            <Link href='https://babybags.netlify.app/' isExternal >
              <Button
                flex={1}
                width="8vw"
                fontSize={'sm'}
                rounded={'full'}
                _focus={{
                  bg: 'gray.200',
                }}
                >
                    Live Site
              </Button>
            </Link>
            <Link href='https://github.com/Arnab-108/spotty-butter-9254' isExternal>
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
                    Git Repo
                </Button>
            </Link>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    );
  }