// TODO: answer here
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Link data-testid="student-btn" to={"/student"}>
        All Student
      </Link>
    </>
  ); // TODO: replace this
};

export default Home;
