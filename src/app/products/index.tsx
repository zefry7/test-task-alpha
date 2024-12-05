import React, { useState } from "react";
import LayerWrapper from "../../components/layer-wrapper";
import List from "../../components/list";
import Filter from "../../components/filter";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import SearchItem from "../../tool/seatchItem";
import PageRow from "../../components/page-row";
import ChangePage from "../../tool/changePage";
import searchItem from "../../tool/seatchItem";


function Products() {
    const [selectFilter, setSelectFilter] = useState("all")
    const list = useSelector((state: RootState) => state.products.list)
    const search = useSelector((state: RootState) => state.products.search)

    return <LayerWrapper>
        <Filter setSelectFilter={setSelectFilter}/>
        <List list={ChangePage(searchItem(selectFilter == "all" ? list : list.filter(v => v.like == true), search))}/>
        <PageRow list={searchItem(selectFilter == "all" ? list : list.filter(v => v.like == true), search)}/>
    </LayerWrapper> 
}

export default Products