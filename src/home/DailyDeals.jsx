import { ATag, Container, Center, SpaceBetween, FlexDirection, Link, Text, FlexWrap } from '../App.style';
import {ProductTabList, SectionTitle} from './Home.style';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import { useState } from 'react';

const DailyDeals = () => {
    const dispatch = useDispatch()

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}
    ]);

    const [products, setProducts] = useState([
        { 
            image: "https://template.hasthemes.com/flone/flone/assets/img/product/hm10-pro-1.jpg",
            price: 60,
            id: 1
        },
        { 
            image: "https://template.hasthemes.com/flone/flone/assets/img/product/hm10-pro-2.jpg",
            price: 40,
            id: 2
        },
        { 
            image: "https://template.hasthemes.com/flone/flone/assets/img/product/hm10-pro-3.jpg",
            price: 70,
            id: 3
        },
        { 
            image: "https://template.hasthemes.com/flone/flone/assets/img/product/hm10-pro-4.jpg",
            price: 30,
            id: 4
        },
        { 
            image: "https://template.hasthemes.com/flone/flone/assets/img/product/hm10-pro-5.jpg",
            price: 80,
            id: 5
        },
        { 
            image: "https://template.hasthemes.com/flone/flone/assets/img/product/hm10-pro-6.jpg",
            price: 50,
            id: 6
        },
    ])
    
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
            <Container display="flex" flexWrap="wrap">
                {products.map((product) => (
                    <Container width="30%" padding="0 15px" backgroundColor="white">
                        <FlexDirection flexDirection="column">
                            <Center onClick={() => dispatch(increment())} backgroundColor="#F6F6F6" key={product.id}>
                                <ATag to="/"><img src={product.image} /></ATag>
                            </Center>
                            <SpaceBetween margin="7px auto" width="100%" padding="10px 10px">
                                <FlexDirection flexDirection="column" margin="0">
                                    <ATag>Product Title Here</ATag>
                                    <Text>${product.price}</Text>
                                </FlexDirection>
                                <ATag><FavoriteBorderOutlinedIcon /></ATag>
                            </SpaceBetween>
                        </FlexDirection>
                    </Container>
                ))}
            </Container>
        </Container>
    );
}
 
export default DailyDeals;