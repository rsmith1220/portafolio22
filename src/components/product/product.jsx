import React from "react";
import ReactDOM from "react-dom";

import "./product.css";

const Product = ({ img, link }) => {
    return (
        <div className="p">
            <div className="browse"></div>
            <a href={link} target="_blank">
                <img src={img} className="p-img"></img>
            </a>
        </div>
    );
};

export default Product;
