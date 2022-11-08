
const categoryState = {
    categories: [
        {
            id:'technology',
            category: 'Technology',
            description: 'High quality tech at a low price!',
            displayed: true,
        },
        {
            id:'home',
            category: 'Home',
            description: 'Pick up something for the home!',
            displayed: true,
        },
    ],
    products: [
        {
            name: 'Television',
            category: 'technology',
            displayed: true,
            description: '60" Class N10-X900M2 Great color smart TV.',
            price: 250,
            inventory: 10,
        },
        {
            name: 'Blender',
            category: 'home',
            displayed: true,
            description: 'Perfect for healthy smoothies!',
            price: 20,
            inventory: 5,
        },
    ],
    activeCategories: [],
};

export const handleCategories = (payload) => {
    return {
        type: 'CHANGE_CATEGORY',
        payload: payload,
    }
}

const categoryReducer = (state=categoryState, action) => {
    switch(action.type){
        case 'CHANGE_CATEGORY':
            return {
                categories: state.categories.map(category => {
                    if(category.id === action.payload){
                        category.displayed = !category.displayed;
                    }
                    return category;
                }),
                activeCategories: state.categories.map(category => {
                    if(category.displayed === true){
                        return category.id;
                    }
                })
            }
            default: return state;

    }
}

export default categoryReducer;