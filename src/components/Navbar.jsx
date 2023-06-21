// TODO: answer here
import { Link as ReachLink } from "react-router-dom";
import { Button, Flex, HStack, Heading, Spacer, Link } from "@chakra-ui/react";

const NavBar = () => {
  return (
    // TODO: answer here
    <Flex as="header" p="2rem" gap="2rem" mb="3rem">
      <Link as={ReachLink} to={"/"} data-testid="home-page">
        <Button
          variant="link"
          color="blue.600"
          fontWeight="bold"
          fontSize="1.7rem"
          _hover={{
            textDecoration: "none",
          }}
        >
          Student Portal
        </Button>
      </Link>
      <Spacer />
      <HStack spacing="1rem">
        <Link as={ReachLink} to={"/student"} data-testid="student-page">
          <Button variant="link" color="black" fontWeight="normal">
            All Student
          </Button>
        </Link>
        <Link as={ReachLink} to={"/add"} data-testid="add-page">
          <Button variant="link" color="black" fontWeight="normal">
            Add Student
          </Button>
        </Link>
      </HStack>
    </Flex>
  );
};

export default NavBar;
