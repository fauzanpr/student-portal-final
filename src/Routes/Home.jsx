// TODO: answer here
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Link data-testid="student-btn" to={"/student"}>
        <Button colorScheme="blue">All Student</Button>
      </Link>
    </>
  ); // TODO: replace this
};

export default Home;
