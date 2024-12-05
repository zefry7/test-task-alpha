import React from "react";
import LayerWrapper from "../../components/layer-wrapper";
import Info from "../../components/info";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useParams } from "react-router";

function Article() {
    const { id } = useParams()
    const list = useSelector((state: RootState) => state.products.list)

    return <LayerWrapper>
        <Info item={list.filter(v => v.id === Number(id))[0]}/>
    </LayerWrapper>
}

export default Article;