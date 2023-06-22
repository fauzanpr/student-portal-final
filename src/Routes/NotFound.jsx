// TODO: answer here
import { useNavigate } from "react-router-dom";
import { Button, Box, Image, Flex } from "@chakra-ui/react";
import notFound from "../assets/not-found.jpeg";

const NotFound = () => {
  const navigate = useNavigate();

  const backBtnHandler = () => {
    navigate(-1);
  };

  return (
    <Flex
      margin="auto"
      width="fit-content"
      direction="column"
      gap="3rem"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Image src={notFound} />
      <Button
        onClick={backBtnHandler}
        bg="white"
        color="black"
        border="2px solid black"
        transition=".5s"
        _hover={{
          bg: 'blue.600',
          color: 'white',
        }}
      >
        Take Me Back
      </Button>
    </Flex>
  );
};

export default NotFound;
