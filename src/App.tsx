import React from "react";
// import "./components/Styles/saved.css";
// import "./components/Styles/about.css";
// import "./components/Styles/errorPage.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import SavedFilesPage from "./pages/SavedFilesPage.js";
import Header from "./components/Header.js";
import About from "./pages/About.js";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage.js";
import { DataProvider } from "./context/DataContext.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <DataProvider>
          <div className="wrapper flex flex-col justify-between font-inter">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="saved-files" element={<SavedFilesPage />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
          </div>
        </DataProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
