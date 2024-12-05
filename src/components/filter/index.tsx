import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";

type Props = {
    setSelectFilter: Function
}


function Filter({ setSelectFilter }: Props) {
    const dispath = useDispatch<AppDispatch>()

    return <div className="filter">
        <div className="filter__block">
            <select className="filter__select" onChange={(e) => setSelectFilter(e.target.value)}>
                <option value="all">Все</option>
                <option value="like">Избранные</option>
            </select>
            <input type="text" className="filter__search" onChange={(e) => dispath({type: "search", value: e.target.value})}/>
        </div>
        <Link to={"/create-product"} className="filter__button button-style">Добавить</Link>
    </div>
}

export default Filter;