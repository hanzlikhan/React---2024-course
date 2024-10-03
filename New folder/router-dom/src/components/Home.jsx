import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const handleOnCLick = () => {
    navigate("/about");
  };
  return (
    <div>
      Home
      <button onClick={handleOnCLick}>go to about</button>
    </div>
  );
};
