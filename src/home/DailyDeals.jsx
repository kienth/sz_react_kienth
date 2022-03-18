import { DailyDealsContainer, ProductTabList, SectionTitle, TabContent } from './Home.style';

const DailyDeals = () => {
    return (
        <DailyDealsContainer>
            <SectionTitle>
                <h1>DAILY DEALS!</h1>
            </SectionTitle>
            <ProductTabList>
                <a href="#"><h3>New Arrivals</h3></a>
                <a href="#"><h3>Best Sellers</h3></a>
                <a href="#"><h3>Sale Items</h3></a>
            </ProductTabList>
        </DailyDealsContainer>
    );
}
 
export default DailyDeals;