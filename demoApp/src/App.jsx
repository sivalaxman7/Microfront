import React,{useState} from "react";
import ReactDOM from "react-dom";
import Content from "./Content";
import SafeComponent from "./SafeComponent";
import Footer from "footer/Footer";
import Header from "header/Header";


import "./index.scss";

const App = () => {
  return(
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <SafeComponent>
    <Header/>
    </SafeComponent>
    <Content/>
    <SafeComponent>
    <Footer/>
    </SafeComponent>
  </div>
)};
ReactDOM.render(<App />, document.getElementById("app"));
