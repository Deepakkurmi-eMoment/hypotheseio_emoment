import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import Layout from "./components/Layout";
import Exchange from "./components/Exchange";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/exchange" element={<Exchange />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
