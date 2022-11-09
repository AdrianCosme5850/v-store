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

const productReducer = (state=products, action) => {
    switch(action.type){
        case 'CHANGE_CATEGORY':
            return state.map(product => {
                    if(product.category === action.payload){
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
            default: return state;

    }
}

module.exports ={
    productReducer,
    handleProducts,
};