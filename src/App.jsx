import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header, Footer } from "./Components";
import { Contact, Courses, ErrorPage, Home, Login, Teachers } from "./Pages";
import './App.scss'

function App() {

  // const saveStorage = (data, dataName = "theme") => {
  //   localStorage.setItem(dataName, JSON.stringify(data));
  // };

  // const localData = JSON.parse(localStorage.getItem("theme")) || "";

  // const [theme, setTheme] = React.useState(localData);


  return (
    <div className="App">
      <Header />
     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
