import React from "react";
import ReactDOM from "react-dom";
import About from "./components/about/about.jsx";
import Intro from "./components/intro.jsx";
import Lista from "./components/productList/lista.jsx";

const App = () => {
    return (
        <div>
            <Intro />
            <About />
            <Lista />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
