import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSelector, useDispatch} from 'react-redux';
import { handleCategories, getCategories } from '../store/categories';
import { useEffect } from 'react';

const Categories = function(props){

    let dispatch = useDispatch();
    let categories = useSelector(state => state.categories);
    useEffect(() => {
        dispatch(getCategories());
    }, [])
    return(<>

    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <p>Categories</p>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
            {categories.map((category, index) => {
        return(
            <FormControlLabel key={index} control={<Checkbox onChange={() => {dispatch(handleCategories(category))}} defaultChecked/>} label={category.name}/>
        )
    })}
        </FormGroup>
        </AccordionDetails>
    </Accordion>
    </>)
}

export default Categories;