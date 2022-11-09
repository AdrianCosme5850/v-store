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
const getCategories = () => async (dispatch) => {
    let response = await fetch('https://api-js401.herokuapp.com/api/v1/categories');
    let data = await response.json();
    dispatch(setCategories(data.results))
}

const setCategories = (payload) => {
    return {
        type: 'SET_CATEGORIES',
        payload: payload,
    }
} 

const categoryReducer = (state=categories, action) => {
    switch(action.type){
        case 'CHANGE_CATEGORY':
            return state.map(category => {
                if(category.name === action.payload.name){
                    category.displayed = !category.displayed;
                } 
                return category;
            })
        case 'SET_CATEGORIES': state = action.payload.map(category => {
            category.displayed = true;
            return category;
        }); console.log(state)

        default: return state;
    }
}

module.exports = {
    handleCategories,
    categoryReducer,
    getCategories,
}