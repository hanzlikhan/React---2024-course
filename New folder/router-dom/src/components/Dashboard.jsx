import { Outlet } from "react-router-dom";
export const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet/>
    </div>
  );
};