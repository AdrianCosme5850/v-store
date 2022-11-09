const categories = [
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
];

const handleCategories = (payload) => {
    return {
        type: 'CHANGE_CATEGORY',
        payload: payload,
    }
}

const categoryReducer = (state=categories, action) => {
    switch(action.type){
        case 'CHANGE_CATEGORY':
            return state.map(category => {
                if(category.id === action.payload){
                    category.displayed = !category.displayed;
                } 
                return category;
            })
        default: return state;
    }
}

module.exports = {
    handleCategories,
    categoryReducer,
}