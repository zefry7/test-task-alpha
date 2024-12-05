import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

type Props = {
    item: {
        userId: number,
        id: number,
        title: string,
        body: string,
        like?: boolean
    }
}


function Info({ item }: Props) {

    return <div className="info">
        <Link to={"/products"} className="button-style">Назад</Link>
        <div className="info__block">
            <h1 className="info__title">{item.title}</h1>
            <p className="info__id">ID: {item.id}</p>
            <p className="info__text">Описание: {item.body}</p>
        </div>
    </div>
}

export default Info;