import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

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
          <Text>João Túlio</Text>
          <Text color="gray.300" fontSize="small">
            joaotuliosoares@hotmail.com
          </Text>

        </Box>
      )}
      <Avatar size="md" name='João Túlio' src="https://github.com/joaotuliojt.png" />
    </Flex>
  )
}