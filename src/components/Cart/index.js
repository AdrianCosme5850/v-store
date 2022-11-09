import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCart, removeCart } from '../store/cart';
import Button from '@mui/material/Button';
import { getCart } from '../store/cart';
import { useEffect } from 'react';

const Cart = function() {
    let cart = useSelector(state => state.cart);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCart());
    })

    return(<>
     <h1>CART</h1>
    {cart.map(product => {
       return( <Card>
            <CardContent>
                {product.name}
                <br></br>
                Quantity: {product.inCart + 1} <Button onClick={() => dispatch(incrementCart(product))}>+</Button>
                <Button onClick={() => {dispatch(removeCart(product))}}>X</Button>
            </CardContent>
        </Card>)
    })}
    </>)
}

export default Cart;