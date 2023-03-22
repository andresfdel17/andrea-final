import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { PersonalCard } from "../components/PersonalCard";
import { Layout } from "../components/Layout";

export const Router = () => {
  return (
    <BrowserRouter basename="/andrea-final">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/student/:id" element={<PersonalCard />} />
          <Route path="*" element={"No se halló"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
