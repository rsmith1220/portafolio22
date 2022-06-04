import React from "react";
import ReactDOM from "react-dom";
import About from "./components/about/about.jsx";
import Intro from "./components/intro.jsx";

const App = () => {
    return (
        <div>
            <Intro />
            <About />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
