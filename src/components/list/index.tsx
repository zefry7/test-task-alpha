import React from "react";
import ItemProduct from "../item-product";
import "./style.scss";

type Item = {
    userId: number,
    id: number,
    title: string,
    body: string,
    like?: boolean
}

type Props = {
    list: Item[] | null
}

function List({ list } : Props) {


    return <div className="list">
        <div className="list__content">
            {list?.map((v, i) => (
                <ItemProduct key={v?.id} item={v}/>
            ))}
        </div>
    </div>
}

export default List;