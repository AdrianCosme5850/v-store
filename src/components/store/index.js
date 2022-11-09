import { createStore, combineReducers, applyMiddleware } from 'redux';
import {categoryReducer} from './categories';
import{productReducer} from './storeInventory'
import { cartReducer } from './cart';
import thunk from 'redux-thunk'

const reducers = {
    categories: categoryReducer,
    products: productReducer,
    cart: cartReducer,
}



export default createStore(combineReducers(reducers), applyMiddleware(thunk));