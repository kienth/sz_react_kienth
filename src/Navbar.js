import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img 
      src="https://template.hasthemes.com/flone/flone/assets/img/logo/logo.png"
      alt="new"
      />
      <div className="links">
        <a href="/">Home <KeyboardArrowDownIcon /></a>
        <a href="/">Shop <KeyboardArrowDownIcon /></a>
        <a href="/">Collection</a>
        <a href="/">Pages <KeyboardArrowDownIcon /></a>
        <a href="/">Blog <KeyboardArrowDownIcon /></a>
        <a href="/">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="iconLinks">
        <a href="/"><SearchOutlinedIcon /></a>
        <a href="/"><PersonOutlineOutlinedIcon /></a>
        <a href="/"><FavoriteBorderOutlinedIcon /></a>
        <a href="/cart"><LocalMallOutlinedIcon /></a>
      </div>
    </nav>
  );
}
 
export default Navbar;