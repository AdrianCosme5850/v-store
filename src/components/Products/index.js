import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Products = function() {
    return(<>
    <Card sx={{ width: 300}}>
        <CardContent>
            <h2>Product name</h2>
            <p> Product description</p>
        </CardContent>
    </Card>
</>)
};

export default Products;