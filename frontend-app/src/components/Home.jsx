import { Stack, Text, Input, Button, useToast } from "@chakra-ui/react";
// import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../store/users/users.actions";

export const Home = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector((state) => state.users);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.match(/^\w+$/)) {
      toast({
        title: "Error.",
        description: "Username must only contain alphanumeric characters.",
        status: "error",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
    } else if (name.length < 4) {
      toast({
        title: "Error.",
        description: "Username must be at least 4 characters long.",
        status: "error",
        position: "top",
        duration: 5000,
        isClosable: true,
      });
    } else {
      let obj = {
        username: name,
      };
      dispatch(loginUser(obj));
      navigate("/notices");
    }
  };

  return (
    <>
      <Stack w="30%" marginLeft="auto" marginRight="auto" marginTop="50">
        <Text fontSize="20">Pick a username</Text>
        <Input
          placeholder="Enter your name"
          size="md"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <Button onClick={handleSubmit}>Login</Button>
      </Stack>
    </>
  );
};
