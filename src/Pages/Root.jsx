import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation";

export default function Root() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}
