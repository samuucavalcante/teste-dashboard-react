import { PhoneIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  VStack
} from '@chakra-ui/react'

const Index = () => {
  return (
    <Center bgColor="primary" py={2} w="100%">
      <VStack w="100%" px={12}>
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
  )
}

export default Index
