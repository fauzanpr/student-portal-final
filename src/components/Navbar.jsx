// TODO: answer here
import { Link } from "react-router-dom";
import { Button, Flex, HStack, Heading, Spacer } from "@chakra-ui/react";

const NavBar = () => {
  return (
    // TODO: answer here
    <Flex as="header" p="2rem" gap="2rem" mb="3rem">
      <Heading as="h1" fontSize="1.5rem" color="blue.600">
        Student Portal
      </Heading>
      <Spacer />
      <HStack spacing="1rem">
        <Link to={"/"} data-testid="home-page">
          <Button variant="link" color="black" fontWeight="normal">
            Student Portal
          </Button>
        </Link>
        <Link to={"/student"} data-testid="student-page">
          <Button variant="link" color="black" fontWeight="normal">
            All Student
          </Button>
        </Link>
        <Link to={"/add"} data-testid="add-page">
          <Button variant="link" color="black" fontWeight="normal">
            Add Student
          </Button>
        </Link>
      </HStack>
    </Flex>
  );
};

export default NavBar;
