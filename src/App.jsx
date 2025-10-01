import React from "react";
import "./components/Styles/saved.css";
import "./components/Styles/about.css";
import "./components/Styles/errorPage.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SavedFiles from "./pages/SavedFiles";
import Header from "./components/Header";
import About from "./pages/About";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="saved-files" element={<SavedFiles />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
