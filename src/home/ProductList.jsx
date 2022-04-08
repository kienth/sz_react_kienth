import { ATag, Container, SpaceBetween, FlexDirection, Text } from '../App.style';
import { HoverFlexDirection, ProductImg, DefaultImg, HoverImg, ProductAction, ProductActionA } from './Home.style';
import { addToCart } from '../app/counter';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import { white } from '@mui/material/colors';
import { useDispatch } from 'react-redux';



const ProductList = ({products}) => {
    const dispatch = useDispatch();

    return ( 
        <Container display="flex" flexWrap="wrap" margin="0">
            {products.map((product) => (
                    <Container maxWidth="100%" padding="0 10px" backgroundColor="white" key={product.id}>
                        <HoverFlexDirection flexDirection="column">
                            <ProductImg  >
                                <a href="#">
                                    <DefaultImg src={product.image} />
                                    <HoverImg src={product.image} />
                                </a>
                                <ProductAction>
                                    <ProductActionA onClick={() => dispatch(addToCart(product))}><ShoppingCartOutlinedIcon color="disabled" sx={{ margin: 1 }}/></ProductActionA>
                                    <ProductActionA><VisibilityOutlinedIcon style={{color: "white"}} sx={{ margin: 1 }}/></ProductActionA>
                                    <ProductActionA><CompareArrowsOutlinedIcon style={{color: "white"}} sx={{ margin: 1 }}/></ProductActionA>
                                </ProductAction>
                            </ProductImg>
                            <SpaceBetween margin="7px auto" width="100%" padding="15px 0">
                                <FlexDirection flexDirection="column" margin="0">
                                    <ATag fontWeight="100" color='black'>Product Title Here</ATag>
                                    <Text>${product.price}</Text>
                                </FlexDirection>
                                <ATag><FavoriteBorderOutlinedIcon /></ATag>
                            </SpaceBetween>
                        </HoverFlexDirection>
                    </Container>
                ))}
        </Container>
     );
}
 
export default ProductList;