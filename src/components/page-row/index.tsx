import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import "./style.scss";
import searchItem from "../../tool/seatchItem";

type Item = {
    userId: number,
    id: number,
    title: string,
    body: string,
    like?: boolean
}

type Props = {
    list: Item[] 
}

function PageRow({ list } : Props ) {
    const page = useSelector((state: RootState) => state.products.page)
    const search = useSelector((state: RootState) => state.products.search)
    const [count, setCount] = useState(new Array(Math.ceil(searchItem(list, search).length / 10)).fill(0))
    const dispath = useDispatch<AppDispatch>()

    useEffect(() => {
        let count = searchItem(list, search).length
        if(count == 0) {
            setCount(new Array(1).fill(0))
        } else {
            setCount(new Array(Math.ceil(count / 10)).fill(0)) 
        }
        if(page > Math.ceil(count / 10)) {
            let c = Math.ceil(count / 10) == 0 ? 1 : Math.ceil(count / 10)
            dispath({ type: "change-page", value: c})
        }
    }, [list, search])

    return <div className="page-row">
        {count.map((v, i) => (
            <span 
                className={"page-row__number " + (page == (i + 1) ? "page-row__number_active" : "")} 
                key={i} 
                onClick={() => dispath({ type: "change-page", value: i + 1 })}
            >
                {i + 1}
            </span>
        ))}
    </div>
}

export default PageRow