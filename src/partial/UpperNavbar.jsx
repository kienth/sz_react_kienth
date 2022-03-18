import { ATag, BorderVertical, Container, SpaceBetween, FlexEnd, Text } from '../App.style';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
const UpperNavbar = () => {
    return ( 
        <Container>
            <SpaceBetween>
                <SpaceBetween>
                    <ATag>English <KeyboardArrowDownSharpIcon sx={{ fontSize: 16 }}/></ATag> 
                    <BorderVertical />
                    <ATag>USD <KeyboardArrowDownSharpIcon sx={{ fontSize: 16 }}/></ATag> 
                    <BorderVertical />
                    <Text>Call Us 3965410</Text>
                </SpaceBetween>
                <FlexEnd>
                <Text>Free delivery on order over</Text><Text red>$200</Text>
                </FlexEnd>
            </SpaceBetween>
        </Container>
     );
}
 
export default UpperNavbar;