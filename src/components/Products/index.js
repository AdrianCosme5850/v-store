import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useSelector, useDispatch} from 'react-redux';
import Button from '@mui/material/Button';
import { addToCart } from '../store/cart';

const Products = function(props) {

    let products = useSelector(state => state.products)
    let dispatch = useDispatch();
    return(<>
    {products.map((product, index) => {
        if(product.displayed === true){
            return (
                <Card key={index} sx={{ width: 300}}>
                <CardContent>
                    <h2>{product.name}</h2>
                    <p> {product.description}</p>
                    <p>{product.inventory} in stock</p>
                </CardContent>
                <Button onClick={() => dispatch(addToCart(product))}>Add to cart</Button>
            </Card>
            )
        } return <div></div>
    })}

</>)
};

export default Products;