// TODO: answer here
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    // TODO: answer here
    <header>
      <Link to={"/"} data-testid="home-page">
        Student Portal
      </Link>
      <Link to={"/student"} data-testid="student-page">
        All Student
      </Link>
      <Link to={"/add"} data-testid="add-page">
        Add Student
      </Link>
    </header>
  );
};

export default NavBar;
