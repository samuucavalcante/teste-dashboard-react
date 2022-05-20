import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Text,
  useToast,
  VStack
} from '@chakra-ui/react'
import { useTodo } from 'hooks/useTodo'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import parse from 'html-react-parser'

import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

interface ModalViewTodoProps extends ModalProps {
  todo: {
    id: string
    title: string
    description: string
    createdAt: Date
    done: boolean
  }
}

export default function ModalViewTodo({ todo, ...rest }: ModalViewTodoProps) {
  const { updateTodo } = useTodo()
  const toast = useToast()

  const [inputTitle, setInputTitle] = useState(todo.title)

  const [inputDescription, setInputDescription] = useState(todo.description)

  return (
    <Modal {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="4xl">{todo.title} </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={2}>
            <Box w="100%" h="200px">
              <Text fontSize="lg" as="p">
                {parse(todo.description)}
              </Text>
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Flex justifyContent="space-between" w="100%" alignItems="center">
            <Text fontSize="md" as="span" color="gray.400">
              (visisualização)
            </Text>
            <HStack spacing={2}>
              <IconButton aria-label="delete todo" icon={<AiFillDelete />} />
              <IconButton aria-label="edit todo" icon={<AiFillEdit />} />
            </HStack>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
