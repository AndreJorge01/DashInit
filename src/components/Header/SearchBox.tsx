import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearch2Line } from "react-icons/ri";

export function SearchBox() {

  return (
    <Flex
      as="label"
      flex="l"
      py="4"
      px="8"
      ml="6"
      maxWidth={480}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.500"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na Plataforma"
        _placeholder={{ color: 'gray.400' }}
      />
      <Icon as={RiSearch2Line} size="24" />
    </Flex>
  );
}