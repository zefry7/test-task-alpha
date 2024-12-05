import { useSelector } from "react-redux"
import { RootState } from "../store/store"

type Item = {
    userId: number,
    id: number,
    title: string,
    body: string,
    like?: boolean
}



const searchItem = (list : Item[], search: string) => {
    return search != "" ? list.filter((v) => v.title.match(new RegExp(search))) : list
}

export default searchItem