import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Index from "./pages/index";
import Home from "./pages/home";
import User from "./pages/user";
import HomeOne from "./pages/home/homeOne";
import HomeTwo from "./pages/home/homeTwo";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />}>
          <Route path="/home/one" element={<HomeOne />} />
          <Route path="/home/two" element={<HomeTwo />} />
        </Route>
        <Route path="/user:userId" element={<User />} />
      </Routes>
    </HashRouter>
  );
};
export default Router;
