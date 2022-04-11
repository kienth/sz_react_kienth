import { ATag, Container, Center } from '../App.style';
import { SectionTitle } from './Home.style';

import { useState, useEffect } from 'react';
import ProductList from './ProductList';
import { useDispatch } from 'react-redux';
import { setProductsList } from '../app/counter';

const DailyDeals = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([
        { 
            image: "https://template.hasthemes.com/flone/flone/assets/img/product/hm10-pro-1.jpg",
            price: 60,
            qty: 1,
            subtotal: 60,
            product_name: 'Product Name',
            id: 1
        },
        { 
            image: "https://template.hasthemes.com/flone/flone/assets/img/product/hm10-pro-2.jpg",
            price: 40,
            qty: 1,
            subtotal: 40,
            product_name: 'Product Name',
            id: 2
        },
        { 
            image: "https://template.hasthemes.com/flone/flone/assets/img/product/hm10-pro-3.jpg",
            price: 70,
            qty: 1,
            subtotal: 70,
            product_name: 'Product Name',
            id: 3
        },
        { 
            image: "https://template.hasthemes.com/flone/flone/assets/img/product/hm10-pro-4.jpg",
            price: 30,
            qty: 1,
            subtotal: 30,
            product_name: 'Product Name',
            id: 4
        },
        { 
            image: "https://template.hasthemes.com/flone/flone/assets/img/product/hm10-pro-5.jpg",
            price: 80,
            qty: 1,
            subtotal: 80,
            product_name: 'Product Name',
            id: 5
        },
        { 
            image: "https://template.hasthemes.com/flone/flone/assets/img/product/hm10-pro-6.jpg",
            price: 50,
            qty: 1,
            subtotal: 50,
            id: 6
        },
    ])

    useEffect(() => {
        dispatch(setProductsList(products))
      }, [products])
    
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
            <ProductList products={products} />
        </Container>
    );
}
 
export default DailyDeals;