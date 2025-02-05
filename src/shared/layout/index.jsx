import React from "react";
import Sidebar from "../../components/sidebar";
import MainPage from "../../components/main";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <header className="fixed left-0 w-[60px] h-full pl-[60px]">
        <Sidebar />
      </header>
      <main className="ml-[60px]">
        <MainPage />
      </main>
        <Outlet />
    </>
  );
};

export default MainLayout;
