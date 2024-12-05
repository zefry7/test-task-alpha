import { combineReducers, createStore } from 'redux'
import reducerProducts, { ProductsState } from './reducers/reducerProducts'

const rootReducer = combineReducers({
    products: reducerProducts
})

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store