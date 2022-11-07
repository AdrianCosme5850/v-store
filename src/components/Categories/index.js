import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Categories = function(){
    return(<>
    <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <p>categories</p>
        </AccordionSummary>
        <AccordionDetails>
        <FormGroup>
            <FormControlLabel control={<Checkbox/>} label='category'/>
        </FormGroup>
        </AccordionDetails>
    </Accordion>
    </>)
}

export default Categories;