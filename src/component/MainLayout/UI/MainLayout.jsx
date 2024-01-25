import { Outlet } from "react-router-dom";

import s from "./MainLayout.module.scss";
import SideBar from "../../../widgets/SideBar/UI/SideBar";

const MainLayout = () => {
  return (
    <main className={s.MainLayout}>
      <SideBar />
      <Outlet />
    </main>
  );
};

export default MainLayout;
