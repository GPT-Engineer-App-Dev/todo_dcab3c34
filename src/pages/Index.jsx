import { useState } from "react";
import { Box, Flex, Heading, Input, Button, Checkbox, Text, VStack } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <Box p={8}>
      <Flex justify="center" mb={8}>
        <Heading>Todo App</Heading>
      </Flex>
      <Flex justify="center" mb={8}>
        <Input placeholder="Add a new todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} mr={4} />
        <Button onClick={addTodo} colorScheme="blue">
          <FaPlus />
        </Button>
      </Flex>
      <VStack spacing={4}>
        {todos.map((todo, index) => (
          <Flex key={index} justify="space-between" align="center" w="full" p={4} borderWidth={1} borderRadius={8} boxShadow="lg">
            <Checkbox isChecked={todo.completed} onChange={() => toggleTodo(index)}>
              <Text as={todo.completed ? "del" : "span"} color={todo.completed ? "gray.500" : "inherit"}>
                {todo.text}
              </Text>
            </Checkbox>
            <Button colorScheme="red" onClick={() => deleteTodo(index)}>
              Delete
            </Button>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
