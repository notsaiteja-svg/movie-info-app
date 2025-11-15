import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../features/homepage/Homepage";
import Info from "../features/info/Info";
import Login from "../features/login/login";
import Topbar from "../features/topbar/Topbar";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/info" element={<Info />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
