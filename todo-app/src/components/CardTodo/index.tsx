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
  Text
} from '@chakra-ui/react'
import React from 'react'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import parse from 'html-react-parser'

interface CardTodoProps extends BoxProps {
  title: string
  description: string
  createdAt: Date
  isDone: boolean
}

export default function CardTodo({
  title,
  description,
  createdAt,
  isDone,
  ...rest
}: CardTodoProps) {
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
            icon={<AiFillEdit size={18} />}
          />
          <IconButton
            size="sm"
            variant="link"
            aria-label="Edit Todo"
            colorScheme="red"
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
        <Checkbox ml={4} color="blackAlpha.800" colorScheme="green">
          Concluído
        </Checkbox>
      </Box>
    </Box>
  )
}
