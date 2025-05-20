import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";
function Rootlayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default Rootlayout;
