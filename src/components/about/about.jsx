import React from "react";
import ReactDOM from "react-dom";
import "../about/about.css";
import Becca from "../../img/Becca2.png";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img className="a-image" src={Becca} alt="Jelly Bean"></img>
                </div>
            </div>

            <div className="a-right">
                <h1 className="a-title">Un poco sobre mi</h1>
                <p className="a-sub">20 años en 5to semestre de la UVG</p>
                <p className="a-desc">
                    He aprendido varios lenguajes a través de mis años en la
                    Universidad como: Python, Java, HTML, CSS, JavaScript, C,
                    C++, C#. <br></br> Hoy en día estoy tomando un curso para
                    aprender más sobre React con Redux
                </p>
            </div>
        </div>
    );
};
console.log("Hello");
export default About;
