import { ATag, Container, Center, SpaceBetween, FlexDirection, Link, Text } from '../App.style';
import {SectionTitle} from './Home.style';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const DailyDeals = () => {
    return (
        <Container>
            <SectionTitle>
                <h1>DAILY DEALS!</h1>
            </SectionTitle>
            <Center margin="2% 0">
                <ATag size="18px" padding="0 10px" default>New Arrivals</ATag>
                <ATag size="18px" padding="0 10px" default color='black'>Best Sellers</ATag>
                <ATag size="18px" padding="0 10px" default>Sale Items</ATag>
            </Center>
            <SpaceBetween margin="5% 0">
                <Container width="100%">
                    <FlexDirection flexDirection="column">
                        <Center backgroundColor="#F6F6F6">
                            <ATag to="/"><img src="	https://template.hasthemes.com/flone/flone/assets/img/product/hm10-pro-1.jpg" /></ATag>
                        </Center>
                        <SpaceBetween margin="7px auto" width="95%" padding="10px 0">
                            <FlexDirection flexDirection="column" margin="0">
                                <ATag>Product Title Here</ATag>
                                <Text>$60.00</Text>
                            </FlexDirection>
                            <ATag><FavoriteBorderOutlinedIcon /></ATag>
                        </SpaceBetween>
                    </FlexDirection>
                </Container>
                <Container width="100%">
                    <FlexDirection flexDirection="column">
                        <Center backgroundColor="#F6F6F6">
                            <ATag to="/"><img src="	https://template.hasthemes.com/flone/flone/assets/img/product/hm10-pro-2.jpg" /></ATag>
                        </Center>
                        <SpaceBetween margin="7px auto" width="95%" padding="10px 0">
                            <FlexDirection flexDirection="column" margin="0">
                                <ATag>Product Title Here</ATag>
                                <Text>$60.00</Text>
                            </FlexDirection>
                            <ATag><FavoriteBorderOutlinedIcon /></ATag>
                        </SpaceBetween>
                    </FlexDirection>
                </Container>
                <Container width="100%">
                    <FlexDirection flexDirection="column">
                        <Center backgroundColor="#F6F6F6">
                            <ATag to="/"><img src="	https://template.hasthemes.com/flone/flone/assets/img/product/hm10-pro-3.jpg" /></ATag>
                        </Center>
                        <SpaceBetween margin="7px auto" width="95%" padding="10px 0">
                            <FlexDirection flexDirection="column" margin="0">
                                <ATag>Product Title Here</ATag>
                                <Text>$60.00</Text>
                            </FlexDirection>
                            <ATag><FavoriteBorderOutlinedIcon /></ATag>
                        </SpaceBetween>
                    </FlexDirection>
                </Container>
            </SpaceBetween>
        </Container>
    );
}
 
export default DailyDeals;