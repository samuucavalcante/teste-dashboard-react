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
import { useRef, useState } from 'react'
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false
})
type ModalAddTodoProps = ModalProps

export default function ModalAddTodo(props: ModalAddTodoProps) {
  const { addTodo } = useTodo()
  const toast = useToast()
  const inputTitleRef = useRef<HTMLInputElement>(null)
  const [inputDescription, setInputDescription] = useState('')

  const handleSubmit = () => {
    addTodo({
      text: inputTitleRef.current!.value,
      description: inputDescription
    })
    toast({
      title: 'Tarefa adicionada com sucesso!',
      description: '',
      status: 'success'
    })
    inputTitleRef.current!.value = ''
    setInputDescription('')
    props.onClose()
  }

  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Novo Todo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={2}>
            <Input ref={inputTitleRef} placeholder="Título" />
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
