import { createStore, combineReducers } from 'redux';
import {categoryReducer} from './categories';
import{productReducer} from './storeInventory'
import { cartReducer } from './cart';

const reducers = {
    categories: categoryReducer,
    products: productReducer,
    cart: cartReducer,
}



export default createStore(combineReducers(reducers));