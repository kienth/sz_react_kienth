import { Container, FlexDirection, SpaceBetween, Text, H1, H3, Center } from "../App.style";
import { HomeSlider, HomeSliderText } from "./Home.style";

const Slider = () => {
    return ( 
        <Container maxWidth="100%" backgroundColor="#DBFFFB">
            <Container padding="7% 0">
                <SpaceBetween>
                    <FlexDirection flexDirection="column" margin="auto 0">
                        <H3 color="black">Smart Products</H3>
                        <H1 color="black">Summer Offer</H1><H1 color="black">2020 Collection</H1>
                    </FlexDirection>
                    <img 
                        src="	https://template.hasthemes.com/flone/flone/assets/img/slider/single-slide-4.png"
                        alt="new"
                    />
                </SpaceBetween>
            </Container>
        </Container>
     );
}
 
export default Slider;