import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { UnlockIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const img = "https://loremflickr.com/1680/1050/cat";
  const toast = useToast();
  const showToast = () => {
    toast({
      title: "Logged Out",
      description: "succesfully logged out",
      status: "info",
      position: "top",
      isClosable: true,
      duration: 5000,
      icon: <UnlockIcon />,
    });
  };
  return (
    <>
      {/* <Flex bg="gray.400" justify="space-around" wrap="wrap" gap="2">
        <Box w="150px" h="50px" bg="red">
          1
        </Box>
        <Box w="150px" h="50px" bg="green">
          2
        </Box>
        <Box w="150px" h="50px" bg="blue">
          3
        </Box>
        <Box w="150px" h="50px" bg="orange">
          4
        </Box>
      </Flex> */}
      <Flex
        as="nav"
        alignItems="center"
        mb="40px"
        p="10px"
        display={{ sm: "block", md: "flex", lg: "flex", xl: "flex" }}
      >
        <Heading as="h1" color="white" textAlign={{ base: "center" }}>
          Chakra UI
        </Heading>
        <Spacer></Spacer>

        <HStack spacing="20px">
          <Avatar src={img}>
            <AvatarBadge width="1.2em" bg="teal.500" />
          </Avatar>

          <Text
            color="white"
            display={{ base: "block" }}
            m={{ base: "auto" }}
            textAlign={{ base: "center" }}
          >
            avimm079@gmail.com
          </Text>
          <Button
            colorScheme="purple"
            display={{ base: "inline-block" }}
            onClick={showToast}
          >
            Log Out
          </Button>
        </HStack>
      </Flex>
    </>
  );
}
