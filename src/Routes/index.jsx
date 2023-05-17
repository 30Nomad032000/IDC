import React from "react";
import { Navigate, Route, Routes, Router } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
const Home = React.lazy(() => import("../Pages/Home"));
const Registeration = React.lazy(() => import("../Pages/Registeration"));
const Result = React.lazy(() => import("../Pages/Result"));
const Survey = React.lazy(() => import("../Pages/Survey"));

function Index() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registeration />} />
        <Route path="/result" element={<Result />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Index;
