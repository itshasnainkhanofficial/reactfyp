import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <Home/>
       
      </div>
    </div>
  );
}

export default App;
