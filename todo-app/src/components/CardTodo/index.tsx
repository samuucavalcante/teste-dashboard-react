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
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'

type CardTodoProps = BoxProps

export default function CardTodo(props: CardTodoProps) {
  return (
    <Box {...props}>
      <Flex justifyContent="space-between">
        <Box>
          <Heading color="blackAlpha.800" fontSize="2xl">
            Title{' '}
            <Badge variant="solid" colorScheme="green">
              Concluido
            </Badge>
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
        criado em 17/05/2022 ás 13:52
      </Text>
      <Box mt={4}>
        <Text noOfLines={4} fontSize="sm" color="gray.500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
          blanditiis ab molestiae, corporis debitis eum. Id praesentium
          exercitationem numquam beatae architecto debitis sunt culpa earum
          cumque ratione. Itaque omnis sunt placeat veritatis ad culpa aliquid,
          aspernatur molestias at necessitatibus maiores. Cupiditate saepe
          delectus sed ipsa neque. Incidunt quasi quo obcaecati.
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
