import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>ErildoJS</Text>
          <Text color="gray.300" fontSize="small">erildofranciscojs@gmail.com</Text>
        </Box>
      )}
      <Avatar size="md" name="ErildoJS" src="https://github.com/erildojs.png" />
    </Flex>
  )
}