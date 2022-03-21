import { ATag, Container, Center } from '../App.style';
import {SectionTitle} from './Home.style';

const DailyDeals = () => {
    return (
        <Container>
            <SectionTitle>
                <h1>DAILY DEALS!</h1>
            </SectionTitle>
            <Center>
                <ATag size="18px" padding="0 10px" default>New Arrivals</ATag>
                <ATag size="18px" padding="0 10px" default color='black'>Best Sellers</ATag>
                <ATag size="18px" padding="0 10px" default>Sale Items</ATag>
            </Center>
        </Container>
    );
}
 
export default DailyDeals;