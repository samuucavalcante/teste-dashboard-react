import {
  Badge,
  Box,
  BoxProps,
  Button,
  Checkbox,
  Flex,
  Heading,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  useToast,
  VisuallyHidden
} from '@chakra-ui/react'
import React, { useCallback } from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import parse from 'html-react-parser'
import { useTodo } from 'hooks/useTodo'
import ModalEditTodo from 'components/ModalEditTodo'

interface CardTodoProps extends BoxProps {
  id: string
  title: string
  description: string
  createdAt: Date
  isDone: boolean
}

export default function CardTodo({
  id,
  title,
  description,
  createdAt,
  isDone,
  ...rest
}: CardTodoProps) {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const toast = useToast()
  const { deleteTodo, toggleTodoChecked } = useTodo()

  const createdAtFormated = new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'medium',
    timeStyle: 'medium'
  }).format(createdAt)

  const tagFormat = {
    [1]: (
      <Badge variant="solid" colorScheme="green">
        Concluido
      </Badge>
    ),
    [0]: (
      <Badge variant="solid" colorScheme="gray">
        Pendente
      </Badge>
    )
  }

  const handleDeleteTodo = useCallback(() => {
    deleteTodo(id)
    toast({
      title: 'Todo deletado com sucesso!',
      status: 'success'
    })
  }, [])

  return (
    <Box {...rest}>
      <Flex justifyContent="space-between">
        <Box>
          <Heading color="blackAlpha.800" fontSize="2xl">
            {title} {tagFormat[isDone ? 1 : 0]}
          </Heading>
        </Box>
        <HStack>
          <IconButton
            size="sm"
            variant="link"
            aria-label="Edit Todo"
            colorScheme="yellow"
            onClick={onOpen}
            icon={<AiFillEdit size={18} />}
          />
          <ModalEditTodo
            isOpen={isOpen}
            onClose={onClose}
            todo={{ id, title, description, done: isDone, createdAt }}
          >
            <VisuallyHidden />
          </ModalEditTodo>
          <IconButton
            size="sm"
            variant="link"
            aria-label="Edit Todo"
            colorScheme="red"
            onClick={handleDeleteTodo}
            icon={<AiFillDelete size={18} />}
          />
        </HStack>
      </Flex>
      <Text fontSize="smaller" color="#8e8e8e" as="span">
        {createdAtFormated}
      </Text>
      <Box mt={4}>
        <Text id="description" noOfLines={4} fontSize="sm" color="gray.500">
          {parse(description)}
        </Text>
      </Box>

      <Box d="flex" alignItems="center" mt={4} w="100%">
        <Button variant="outline" colorScheme="blackAlpha">
          Visualizar Terefa
        </Button>
        <Checkbox
          onChange={() => toggleTodoChecked(id)}
          ml={4}
          color="blackAlpha.800"
          colorScheme="green"
        >
          Concluído
        </Checkbox>
      </Box>
    </Box>
  )
}
