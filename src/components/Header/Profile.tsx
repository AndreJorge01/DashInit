import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Andre Jorge</Text>
          <Text color="gray.300" fontSize="small">andrejorge386@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Andre Jorge" src="https://github.com/AndreJorge01.png" />
    </Flex>
  );
}