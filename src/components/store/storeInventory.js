const products = [
        {
            name: 'Television',
            category: 'technology',
            displayed: true,
            description: '60" Class N10-X900M2 Great color smart TV.',
            price: 250,
            inventory: 10,
            inCart:0,
        },
        {
            name: 'Blender',
            category: 'home',
            displayed: true,
            description: 'Perfect for healthy smoothies!',
            price: 20,
            inventory: 5,
            inCart:0,
        },
    ]


const handleProducts = (payload) => {
    return {
        type: 'CHANGE_CATEGORY',
        payload: payload,
    }
}
const getProducts = () => async(dispatch) => {
    let response = await fetch('https://api-js401.herokuapp.com/api/v1/products');
    let data = await response.json();
    dispatch(setProducts(data.results))
}

const setProducts = (payload) => {
    return {
        type: 'SET_PRODUCTS',
        payload: payload,
    }
}

const productReducer = (state=products, action) => {
    switch(action.type){
        case 'CHANGE_CATEGORY':
            return state.map(product => {
                    if(product.category === action.payload.name){
                        product.displayed = !product.displayed;
                    }
                    return product;
                })
        case 'ADD_CART':
            return state.map(product => {
                if(product.name === action.payload.name){
                    product.inventory = product.inventory - 1;
                }
                return product;
            })
        case 'INCREMENT_CART': 
            return state.map(product => {
                if (product.name === action.payload.name){
                    product.inventory = product.inventory - 1;
                }
                return product;
            })
        case 'REMOVE_CART': 
        return state.map(product => {
            if(product.name === action.payload.name){
                product.inventory = product.inventory + action.payload.inCart + 1;
                product.inCart = 0;
            }
            return product;
        })
        case 'SET_PRODUCTS': state = action.payload.map(product => {
            product.displayed = true;
            return product
        }); console.log(state);

            default: return state;

    }
}

module.exports ={
    productReducer,
    handleProducts,
    getProducts,
};