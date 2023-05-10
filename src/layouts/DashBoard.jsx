import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";

export default function DashBoard() {
  const [tasks, setTasks] = useState([]);

  const tasksLoader = async () => {
    const res = await axios.get("http://localhost:3001/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    tasksLoader();
  }, []);

  return (
    <SimpleGrid spacing={10} minChildWidth="250px" p="10px">
      {tasks &&
        tasks.map((task) => (
          <Card
            key={task.id}
            borderTop="8px"
            borderColor="orange.400"
            bg="white"
          >
            <CardHeader>
              <Flex gap={5}>
                <Avatar src={task.img} />
                <Box w="80px" h="50px">
                  <Heading as="h5" size="sm">
                    {task.title}
                  </Heading>
                  <Text size="sm">By {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color="gray.400">
              <Text>{task.desc}</Text>
            </CardBody>
            <Divider borderColor="gray.500"></Divider>
            <CardFooter>
              <HStack>
                <Button
                  variant="ghost"
                  leftIcon={<ViewIcon />}
                  colorScheme="purple"
                >
                  Watch
                </Button>
                <Button
                  variant="ghost"
                  leftIcon={<EditIcon />}
                  colorScheme="purple"
                >
                  Comments
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
}
