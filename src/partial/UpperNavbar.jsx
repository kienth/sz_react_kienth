import {PartialUpperNavbar, PartialUpperLeft, PartialLink} from './Partial.style';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
const UpperNavbar = () => {
    return ( 
        <PartialUpperNavbar>
            <PartialLink>
                <a href='#'> English <KeyboardArrowDownSharpIcon sx={{ fontSize: 16 }}/></a>
                <PartialUpperLeft />
                <a href='#'> USD <KeyboardArrowDownSharpIcon sx={{ fontSize: 16 }}/></a>
                <PartialUpperLeft />
                <a href='#'> Call Us 3965410 </a>
            </PartialLink>
            <div>
                Free delivery on order over <span style={{color:'red'}}>$200</span>
            </div>
        </PartialUpperNavbar>
     );
}
 
export default UpperNavbar;