// TODO: answer here
import { Link } from "react-router-dom";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Bg from "../assets/bg-main.png";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Flex
        direction="column"
        bgImage={Bg}
        height="100vh"
        justifyContent="center"
        alignItems="center"
        gap="1rem"
      >
        <Heading>Hello Welcome To Our Student Portal</Heading>
        <Text>To see students data, please click the button below</Text>
        <Link data-testid="student-btn" to={"/student"}>
          <Button
            bg="blue.600"
            color="white"
            fontWeight="bold"
            p="1.5rem 2rem"
            borderRadius="20px"
            transition=".5s"
            _hover={{
              bg: "blue.800",
            }}
          >
            All Student
          </Button>
        </Link>
      </Flex>
      <Footer hidden={true} />
    </>
  ); // TODO: replace this
};

export default Home;
