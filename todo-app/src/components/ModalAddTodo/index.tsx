import {
  Box,
  Button,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Textarea,
  VStack
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false
})
type ModalAddTodoProps = ModalProps

export default function ModalAddTodo(props: ModalAddTodoProps) {
  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Novo Todo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={2}>
            <Input placeholder="Título" />
            <Box w="100%" h="200px">
              <QuillNoSSRWrapper style={{ height: 150 }} />
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue">Criar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
