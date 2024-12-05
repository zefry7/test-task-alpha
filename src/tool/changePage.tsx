import { useSelector } from "react-redux"
import { RootState } from "../store/store"

type Item = {
    userId: number,
    id: number,
    title: string,
    body: string,
    like?: boolean
}

const ChangePage = (list: Item[]) => {
    const page = useSelector((state: RootState) => state.products.page)
    const arr = []

    for(let i = (page - 1) * 10; i < (page) * 10; ++i) {
        if(i >= list.length) {
            break
        } else {
            arr.push(list[i])
        }
    }

    return arr
}

export default ChangePage;