import { Reducer } from "redux";


type Item = {
    userId: number,
    id: number,
    title: string,
    body: string,
    like?: boolean
}

export interface ProductsState {
    list: Item[],
    like: Item[],
    search: string,
    page: number
}

interface Loading {
    type: 'loading';
    value: any; 
}

interface Remove {
    type: 'delete';
    value: number; 
}

interface Like {
    type: 'like';
    value: Item; 
}

interface Add {
    type: 'add';
    value: Item; 
}

interface Search {
    type: 'search';
    value: string; 
}

interface ChangePage {
    type: 'change-page';
    value: number; 
}

type ProductsAction = Loading | Remove | Like | Add | Search | ChangePage


const initialState: ProductsState = {
    list: [],
    like: [],
    search: "",
    page: 1
}


const reducerProducts = (state: ProductsState = initialState, action: ProductsAction): ProductsState => {
    switch(action.type) {
        case "loading":
            return {...state, list: action.value}
        case "delete": 
            return {...state, list: state.list.filter(v => v.id != action.value)}
        case "like":
            let arr = [...state.list]
            if(arr.filter(v => v.id == action.value.id)[0].like != true) {
                arr = arr.map(v => v.id == action.value.id ? ({...action.value, like: true}) : v)
            } else {
                arr = arr.map(v => v.id == action.value.id ? ({...action.value, like: false}) : v)
            }
            return {...state, list: arr}
        case "add": 
            return {...state, list: [...state.list, {...action.value, id: state.list[state.list.length - 1].id + 1}]}
        case "search":
            return {...state, search: action.value}
        case "change-page":
            return {...state, page: action.value}
        default: 
            return {...state}
    }
}

export default reducerProducts