let cart = [];

const addToCart = (payload) => {
    console.log(payload)
    return {
        type: 'ADD_CART',
        payload: payload,
    }
}
const incrementCart = (payload) => {
    return{
        type: 'INCREMENT_CART',
        payload: payload,
    }
}
const removeCart = (payload) => {
    return {
        type: 'REMOVE_CART',
        payload: payload,
    }
}

const getCart = () => async(dispatch) => {
    let response = await fetch('https://api-js401.herokuapp.com/api/v1/products');
    let data = await response.json();
    console.log(data)
}

const cartReducer = (state=cart, action) => {
    switch(action.type){
        case 'ADD_CART':return [...state, action.payload];
        case 'INCREMENT_CART':
        return state.map(product => {
            if(product.name === action.payload.name){
                product.inCart = product.inCart + 1;
                return product;
            } else { return product}
        })
        case 'REMOVE_CART':
            let newState = []; 
         state.forEach(product => {
            if(product.name !== action.payload.name){
                newState[newState.length] = product;
            }
            state = newState;
        });
        
        default: return state
    }
}

module.exports = {
    addToCart,
    cartReducer,
    incrementCart,
    removeCart,
    getCart,
}