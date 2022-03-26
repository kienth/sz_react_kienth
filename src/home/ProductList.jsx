import { ATag, Container, Center, SpaceBetween, FlexDirection, Text } from '../App.style';
import { addToCart } from '../app/counter'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useDispatch } from 'react-redux'

const ProductList = ({products}) => {
    const dispatch = useDispatch()
    return ( 
        <Container display="flex" flexWrap="wrap" margin="0">
            {products.map((product) => (
                    <Container maxWidth="100%" padding="0 10px" backgroundColor="white" key={product.id}>
                        <FlexDirection flexDirection="column">
                            <Center onClick={() => dispatch(addToCart(product))} backgroundColor="#F6F6F6" >
                                <ATag to="/"><img src={product.image} /></ATag>
                            </Center>
                            <SpaceBetween margin="7px auto" width="100%" padding="15px 0">
                                <FlexDirection flexDirection="column" margin="0">
                                    <ATag fontWeight="100" color='black'>Product Title Here</ATag>
                                    <Text>${product.price}</Text>
                                </FlexDirection>
                                <ATag><FavoriteBorderOutlinedIcon /></ATag>
                            </SpaceBetween>
                        </FlexDirection>
                    </Container>
                ))}
        </Container>
     );
}
 
export default ProductList;