// TODO: answer here
import { useNavigate } from "react-router-dom";
import { Button, Box, Text } from "@chakra-ui/react";

const NotFound = () => {
  const navigate = useNavigate();

  const backBtnHandler = () => {
    navigate(-1);
  };

  return (
    <Box margin="auto" width="fit-content">
      <Text mb="1rem" fontSize="2rem">
        404 | Not Found
      </Text>
      <Button onClick={backBtnHandler}>Take Me Back</Button>
    </Box>
  );
};

export default NotFound;
