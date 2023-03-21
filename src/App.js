import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import React from "react";
import { NoMatchFound } from "./components/NoMatchFound";
import { Product } from "./components/Product";
import { NewProduct } from "./components/NewProduct";
import { FeatureProduct } from "./components/FeatureProduct";
import { CardDetail } from "./components/CardDetail";
import { CardDetail as NewCard } from "./components/NewProduct/CardDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="product" element={<Product />}>
          <Route path="new" element={<NewProduct />} />
          <Route path="feature" element={<FeatureProduct />}></Route>
        </Route>
        <Route path="product/feature/:id" element={<CardDetail />} />
        <Route path="product/new/:id" element={<NewCard />} />

        <Route path="*" element={<NoMatchFound />} />
      </Routes>
    </>
  );
}

export default App;
