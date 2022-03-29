import { ATag, Container, Center, SpaceBetween, FlexDirection, Text } from '../App.style';
import { addToCart } from '../app/counter';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import { white } from '@mui/material/colors';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const HoverFlexDirection = styled.div`
    position: relative;
    overflow: hidden;
    &:hover div a {
        -webkit-transform: scaleX(1);
          transform: scaleX(1);
    }
`;

const ProductImg = styled.div`
    position: relative;
    & img {
        width: 100%;
    }
    & span {
        font-size: 14px;
        font-weight: 500;
        position: absolute;
        top: 20px;
        right: 20px;
    }
`;

const DefaultImg = styled.img`
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    &:hover {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        visibility: hidden;
    }
`;

const HoverImg = styled.img`
    position: absolute;
    top: 0px;
    visibility: hidden;
    left: 0px;
    width: 100%;
    opacity: 0;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-transform: translateX(100%);
          transform: translateX(100%);
    &:hover {
        visibility: visible;
        opacity: 1;
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
`;

const ProductAction = styled.div`
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    width: 100%;
`;

const ProductActionA = styled.a`
    display: inline-block;
    line-height: 1;
    width: 42px;
    height: 42px;
    line-height: 42px;
    font-size: 16px;
    background-color: #a749ff;
    color: #fff;
    text-align: center;
    border-radius: 50px;
    margin: 0 3px;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    &:hover {
        background-color: #fa6bff;
    }
`;

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
                                    <ProductActionA><VisibilityOutlinedIcon color="disabled" sx={{ margin: 1 }}/></ProductActionA>
                                    <ProductActionA><CompareArrowsOutlinedIcon color="disabled" sx={{ margin: 1 }}/></ProductActionA>
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