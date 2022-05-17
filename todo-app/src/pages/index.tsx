import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Input,
  useDisclosure,
  VisuallyHidden,
  VStack
} from '@chakra-ui/react'
import CardTodo from 'components/CardTodo'
import ModalAddTodo from '../components/ModalAddTodo'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useTodo } from 'hooks/useTodo'

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { todos } = useTodo()

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
          <Flex
            cursor="pointer"
            justifyContent="center"
            alignItems="center"
            boxShadow="xl"
            w={['100%', '100%', '50%', '32%']}
            borderRadius="md"
            p={4}
            minW="350px"
            mt={2}
            ml={2}
            minH={200}
            _hover={{
              bgColor: 'gray.200'
            }}
            onClick={onOpen}
          >
            <IconButton
              aria-label="Add Todo"
              variant="unstyled"
              icon={<AiFillPlusCircle color="black" size={30} />}
            ></IconButton>

            {/* Modal That Add Todo */}
            <ModalAddTodo isOpen={isOpen} onClose={onClose}>
              <VisuallyHidden />
            </ModalAddTodo>
          </Flex>
          {todos.map((todo) => (
            <CardTodo
              id={todo.id}
              isDone={todo.done}
              createdAt={todo.createdAt}
              key={todo.id}
              title={todo.title}
              description={todo.description}
              borderRadius="md"
              p={4}
              minW="350px"
              mt={2}
              ml={2}
              w={['100%', '100%', '50%', '32%']}
              boxShadow="xl"
            />
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Index
