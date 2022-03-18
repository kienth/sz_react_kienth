import { ATag, Container, SpaceBetween } from '../App.style';
import { PartialNavbar } from './Partial.style';
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';

const NavigationLink = styled(ATag)`
    margin: 0 15px;
`;

const NavigationIcon = styled(ATag)`
    margin: 0 5px;
`;

const TrueNavigationLink = styled(Link)`
    margin: 0 15px;
    text-decoration: none;
    &:hover {
        color: ${props => props.default ? "black" : "#AF49FF"};
    }
`;

const Navbar = () => {
    return (
        <Container>
            <PartialNavbar>
                <SpaceBetween>
                    <Link to="/"><img src="https://template.hasthemes.com/flone/flone/assets/img/logo/logo.png" /></Link>
                    <SpaceBetween>
                        <NavigationLink>Home <KeyboardArrowDownSharpIcon sx={{ fontSize: 16 }}/></NavigationLink> 
                        <NavigationLink>Shop <KeyboardArrowDownSharpIcon sx={{ fontSize: 16 }}/></NavigationLink> 
                        <NavigationLink>Collection </NavigationLink> 
                        <NavigationLink>Pages <KeyboardArrowDownSharpIcon sx={{ fontSize: 16 }}/></NavigationLink> 
                        <NavigationLink>Blog <KeyboardArrowDownSharpIcon sx={{ fontSize: 16 }}/></NavigationLink> 
                        <NavigationLink>About </NavigationLink> 
                        <TrueNavigationLink to="/contact">Contact</TrueNavigationLink>
                    </SpaceBetween>
                    <SpaceBetween>
                        <NavigationIcon><SearchSharpIcon /></NavigationIcon>
                        <NavigationIcon><PersonSharpIcon /></NavigationIcon>
                        <NavigationIcon><FavoriteBorderSharpIcon /></NavigationIcon>
                        <NavigationIcon><LocalMallSharpIcon /></NavigationIcon>
                    </SpaceBetween>
                </SpaceBetween>
            </PartialNavbar>
        </Container>
    );
}
 
export default Navbar;