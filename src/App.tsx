import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Animals } from "./components/animal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Pages/layout";
import { NotFound } from "./Pages/Notfound";
import { Animal } from "./components/animals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Animals />}></Route>
          <Route path="animal/:id" element={<Animal />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
