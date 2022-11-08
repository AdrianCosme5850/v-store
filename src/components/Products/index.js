import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { connect } from 'react-redux';

const Products = function(props) {
    return(<>
    {props.products.map(product => {
        if(product.displayed === true){
            return (
                <Card sx={{ width: 300}}>
                <CardContent>
                    <h2>{product.name}</h2>
                    <p> {product.description}</p>
                </CardContent>
            </Card>
            )
        } return <div></div>
    })}

</>)
};

const mapStateToProps = (state) => ({
    products: state.products,
    categories: state.categories,
})

export default connect(mapStateToProps)(Products);