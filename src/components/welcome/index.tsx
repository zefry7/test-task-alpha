import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

function Welcome() {

    return <div className="welcome">
        <h1 className="welcome__title">Добро пожаловать!</h1>
        <p className="welcome__subtitle">Тестовое задание</p>
        <Link to={"/products"} className="button-style">Список продуктов</Link>
    </div>
}

export default Welcome;