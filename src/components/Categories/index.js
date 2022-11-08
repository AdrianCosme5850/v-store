import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { connect } from 'react-redux';
import { handleCategories } from '../store/storeInventory';

const Categories = function(props){
    return(<>

    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <p>Categories</p>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
            {props.categories.map(category => {
        return(
            <FormControlLabel control={<Checkbox onChange={() => {props.handleCategories(category.id)}}/>} label={category.category}/>
        )
    })}
        </FormGroup>
        </AccordionDetails>
    </Accordion>
    </>)
}

const mapStateToProps = (state) => ({
    categories: state.categories
})
const mapDispatchToProps = {
    handleCategories,
}
export default connect(mapStateToProps, mapDispatchToProps)(Categories);