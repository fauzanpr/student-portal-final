// TODO: answer here
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const backBtnHandler = () => {
    navigate(-1);
  };

  return (
    <>
      {/* TODO: answer here */}
      <p>404 | Not Found</p>
      <button onClick={backBtnHandler}>Take Me Back</button>
    </>
  );
};

export default NotFound;
