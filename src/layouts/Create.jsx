import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function Create() {
  const [name, setText] = useState();
  const [description, setDescription] = useState();

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleDescChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let value = {
      name: name,
      description: description,
    };
    setText("");
    setDescription("");
    console.log(value);
  };

  return (
    <div>
      <Box maxW="480px" p="20px">
        <form onSubmit={handleSubmit}>
          <FormControl mb="40px">
            <FormLabel>Your Name :</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={handleTextChange}
              isRequired
            />
            <FormHelperText>Please Enter Your Valid Name</FormHelperText>
          </FormControl>

          <FormControl mb="40px">
            <FormLabel>Your Message:</FormLabel>
            <Textarea
              placeholder="Enter Your Message..."
              resize="none"
              value={description}
              onChange={handleDescChange}
              isRequired
            />
          </FormControl>

          <FormControl mb="15px" display="flex" alignItems="center">
            <Checkbox colorScheme="purple" size="lg" />
            <FormLabel mb="0" ml="2">
              Make This is Priority
            </FormLabel>
          </FormControl>

          <Button type="submit">Submit</Button>
        </form>
      </Box>
    </div>
  );
}
