import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCart, removeCart } from '../store/cart';
import Button from '@mui/material/Button';

const Cart = function() {
    let cart = useSelector(state => state.cart);
    let dispatch = useDispatch();
    return(<>
    {cart.map(product => {
       return( <Card>
            <CardContent>
                <h1>CART</h1>
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