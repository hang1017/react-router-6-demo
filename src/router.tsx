import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import Index from "./pages/index";
import Home from "./pages/home";
import User from "./pages/user";

const Router = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/home" element={<Home />} />
      <Route path="/user:userId" element={<User />} />
    </Routes>
  </HashRouter>
);
export default Router;
