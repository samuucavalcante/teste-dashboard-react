import { Flex, HStack, Select, Text } from '@chakra-ui/react'
import { AiOutlineFilter } from 'react-icons/ai'

export default function FilterComponent() {
  const handleSelect = (value: any) => {
    console.log({ value })
  }
  return (
    <HStack>
      <Flex color="blackAlpha.500">
        <AiOutlineFilter size={25} />
        <Text color="blackAlpha.500">Filtro</Text>
      </Flex>
      <Select onChange={(value: any) => handleSelect(value)}>
        <option>Recentes</option>
        <option>A-Z</option>
        <option>Pendente</option>
        <option>Concluido</option>
      </Select>
    </HStack>
  )
}
