import {PartialNavbar, PartialLink} from './Partial.style';
import { Link } from 'react-router-dom'; 
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
const Navbar = () => {
  return (
    <PartialNavbar>
      <Link to="/"><img src="https://template.hasthemes.com/flone/flone/assets/img/logo/logo.png" /></Link>
      <PartialLink>
        <a href="#">Home <KeyboardArrowDownSharpIcon sx={{ fontSize: 16 }}/></a>
        <a href="#">Shop <KeyboardArrowDownSharpIcon sx={{ fontSize: 16 }}/></a>
        <a href="#">Collection</a>
        <a href="#">Pages <KeyboardArrowDownSharpIcon sx={{ fontSize: 16 }}/></a>
        <a href="#">Blog <KeyboardArrowDownSharpIcon sx={{ fontSize: 16 }}/></a>
        <a href="#">About</a>
        <Link to="/contact">Contact</Link>
      </PartialLink>
      <PartialLink>
        <span><SearchSharpIcon /></span>
        <span><PersonSharpIcon /></span>
        <span><FavoriteBorderSharpIcon /></span>
        <span><LocalMallSharpIcon /></span>
      </PartialLink>
    </PartialNavbar>
  );
}
 
export default Navbar;