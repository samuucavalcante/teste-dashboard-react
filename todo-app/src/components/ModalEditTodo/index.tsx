import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  useToast,
  VStack
} from '@chakra-ui/react'
import { useTodo } from 'hooks/useTodo'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false
})

interface ModalAddTodoProps extends ModalProps {
  todo: {
    id: string
    title: string
    description: string
    createdAt: Date
    done: boolean
  }
}

export default function ModalEditTodo({ todo, ...rest }: ModalAddTodoProps) {
  const { updateTodo } = useTodo()
  const toast = useToast()

  const [inputTitle, setInputTitle] = useState(todo.title)

  const [inputDescription, setInputDescription] = useState(todo.description)

  const handleSubmit = () => {
    updateTodo(todo.id, {
      title: inputTitle,
      description: inputDescription
    })

    toast({
      title: 'Todo Atualizado com sucesso!',
      description: '',
      status: 'success'
    })

    rest.onClose()
  }

  return (
    <Modal {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Novo Todo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={2}>
            <Input
              value={inputTitle}
              onChange={(value: React.FormEvent<HTMLInputElement>) =>
                setInputTitle(value.currentTarget.value)
              }
              placeholder="Título"
            />
            <Box w="100%" h="200px">
              <QuillNoSSRWrapper
                value={inputDescription}
                onChange={setInputDescription}
                style={{ height: 150 }}
              />
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button onClick={handleSubmit} colorScheme="blue">
            Criar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
