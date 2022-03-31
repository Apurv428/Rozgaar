import React, { useState } from "react";
import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Jobs from "./Sections/JobsPg/Jobs";
import Contact from "./Sections/Contact Us/Contact";
import PopUp from "./components/PopUp/PopUp";

// import FormComponent from "./Sections/UserRegistration/FormComponent";

// import FormComponentCompany from "./Sections/CompanyRegistration/FormComponent.jsx";

const Home = lazy(() => import("./Pages/Home"));
const Footer = lazy(() => import("./components/Footer/index"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/index"));
const Login = lazy(() => import("./Sections/Login/Login"));

const App = () => {
  // let [font, setFont] = useState(true);
  const [fontSize, setFontSize] = useState(16);

  // function change() {
  //   if (font === true) {
  //     setFont(false);
  //   } else {
  //     setFont(true);
  //   }
  // }

  const sizeIncrement=()=>{
    setFontSize(fontSize + 1)}
  

  const sizeDecrement=()=>{
    setFontSize(fontSize - 1)
  }

  return (
    <Router>
      {/* <div className={font ? "f1" : "f2"}> */}
        <div style={{ fontSize: `${fontSize}px` }}>
          <Suspense fallback={null}>
            <GlobalStyle />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route exact path="/user" element={<FormComponent />} />
            <Route exact path="/company" element={<FormComponentCompany />} /> */}
              <Route exact path="/jobs" element={<Jobs />} />
            </Routes>
            <PopUp sizeInc={sizeIncrement} sizeDec={sizeDecrement} />
            <Footer />
          </Suspense>
        </div>
      {/* </div> */}
    </Router>
  );
};

export default App;
