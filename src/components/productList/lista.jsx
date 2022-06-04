import React from "react";
import ReactDOM from "react-dom";
import "../productList/lista.css";
import Product from "../product/product.jsx";
import { products } from "../../data";

const Lista = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">
                    Contáctame
                    <p className="pl-desc">
                        Si quieres ver mis proyectos o encontrarme en redes
                        sociales
                    </p>
                </h1>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    );
};

export default Lista;
