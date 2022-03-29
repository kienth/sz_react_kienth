import { ATag, Container, SpaceBetween } from '../App.style';
import { PartialNavbar } from './Partial.style';
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux'

const NavigationLink = styled(ATag)`
    margin: 0 15px;
`;

const NavigationIcon = styled(ATag)`
    margin: 0 5px;
    flex-direction: column;
    display: flex;
`;

const TrueNavigationIcon = styled(Link)`
    text-decoration: none;
    margin: 0 5px;
    flex-direction: column;
    display: flex;
    &:hover {
        color: ${props => props.default ? "black" : "#AF49FF"};
    }
`;

const TrueNavigationLink = styled(Link)`
    margin: 0 15px;
    text-decoration: none;
    &:hover {
        color: ${props => props.default ? "black" : "#AF49FF"};
    }
`;

const Navbar = () => {
    const count = useSelector((state) => state.counter.cart)
    const addToCartProduct  = useSelector((state) => state.counter.cart)
    const total             = addToCartProduct.reduce((qty, currentValue) => qty = qty + currentValue.qty,0);
    return (
        <Container>
            <PartialNavbar>
                <SpaceBetween>
                    <Link to="/"><img src="https://template.hasthemes.com/flone/flone/assets/img/logo/logo.png" /></Link>
                    <SpaceBetween>
                        <NavigationLink>Home <KeyboardArrowDownSharpIcon sx={{ fontSize: 16 }}/></NavigationLink> 
                        <NavigationLink>Shop <KeyboardArrowDownSharpIcon sx={{ fontSize: 16 }}/></NavigationLink> 
                        <NavigationLink>Collection </NavigationLink> 
                        <TrueNavigationLink to="/test">Pages <KeyboardArrowDownSharpIcon sx={{ fontSize: 16 }}/></TrueNavigationLink> 
                        <NavigationLink>Blog <KeyboardArrowDownSharpIcon sx={{ fontSize: 16 }}/></NavigationLink> 
                        <NavigationLink>About </NavigationLink> 
                        <NavigationLink>Contact </NavigationLink> 
                    </SpaceBetween>
                    <SpaceBetween>
                        <NavigationIcon><SearchSharpIcon /></NavigationIcon>
                        <NavigationIcon><PersonSharpIcon /></NavigationIcon>
                        <NavigationIcon><FavoriteBorderSharpIcon /></NavigationIcon>
                        <TrueNavigationIcon to="/cart">
                            <Badge badgeContent={total} color="secondary"><LocalMallSharpIcon /></Badge>
                        </TrueNavigationIcon>
                    </SpaceBetween>
                </SpaceBetween>
            </PartialNavbar>
        </Container>
    );
}
 
export default Navbar;