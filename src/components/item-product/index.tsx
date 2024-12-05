import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";

type Props = {
    item: {
        userId: number,
        id: number,
        title: string,
        body: string,
        like?: boolean
    }
}

function ItemProduct({ item }: Props) {
    const [like, setLike] = useState<boolean>(false)
    const dispath = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    useEffect(() => {
        setLike(() => item?.like ? true : false)
    }, [])

    const handleClickDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
        e.stopPropagation()
        dispath({type: "delete", value: id})
    }

    const handleClickLike = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        setLike(v => !v)
        dispath({ type: "like", value: item})
    }

    const handleClickItem = () => {
        navigate("/products/" + item.id)
    }

    return <div className={"item-product " + (like == true ? "item-product_select" : "")} onClick={() => handleClickItem()}>
        <div className="item-product__img"></div>
        <span className="item-product__name" title={item?.title}>
            {item?.title}
        </span>
        <button className="item-product__like" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleClickLike(e)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill={like == true ? "red" : "black"} d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
            </svg>
        </button>
        <button className="item-product__remove" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleClickDelete(e, item?.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" fill="black"></path>
            </svg>
        </button>
    </div>
}

export default ItemProduct