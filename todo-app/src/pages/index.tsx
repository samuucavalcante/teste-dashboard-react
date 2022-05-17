import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  VStack
} from '@chakra-ui/react'
import CardTodo from 'components/CardTodo'

const Index = () => {
  return (
    <Box w="100%">
      {/* Header */}
      <Center bgColor="primary" py={2} w="100%">
        <VStack w="100%" px={2}>
          <Heading color="white" fontSize="3xl">
            Todo App
          </Heading>
          <Flex w="100%">
            <Input
              border="0"
              borderRadius="12px 0px 0px 12px"
              bgColor="whiteAlpha.500"
              w="100%"
              color="white"
              placeholder="Procure por um todo..."
              _placeholder={{
                color: 'whiteAlpha.800'
              }}
            />
            <Button color="primary" borderRadius="0px 12px 12px 0px">
              Procurar
            </Button>
          </Flex>
        </VStack>
      </Center>

      {/* Todo Cards */}
      <Flex w="100%" alignItems="center" justifyContent="center">
        <Flex flexWrap="wrap" w="100%">
          <CardTodo
            borderRadius="md"
            p={4}
            minW="350px"
            mt={2}
            ml={2}
            w={['100%', '100%', '50%', '32%']}
            boxShadow="xl"
          />
        </Flex>
      </Flex>
    </Box>
  )
}

export default Index
