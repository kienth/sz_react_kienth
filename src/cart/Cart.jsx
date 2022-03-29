import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react'
import { increment, decrement, removeToCart, emptyCart } from '../app/counter'
import styled from 'styled-components';
import { ATag, Center, Container, FlexDirection, FlexEnd, H1, H4, SpaceBetween, Table, TBody, Text, THead } from "../App.style";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonQty, InputQty, ActionButton } from "./Cart.style";
import { Link } from "react-router-dom";

const IncrementButton = styled(ButtonQty)`
    border-left: 1px solid #e5e5e5;
    height: 33px;
    padding-top: 9px;
    right: 0;
    top: 0;
    `;

const DecrementButton = styled(ButtonQty)`
    border-right: 1px solid #e5e5e5;
    height: 33px;
    left: 0;
    padding-top: 8px;
    top: 0;
    `;

const CartButton = styled.div`
    background-color: #f2f2f2;
    border-radius: 50px;
    color: #363f4d;
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    padding: 18px 63px 17px;
    text-transform: uppercase;
    transition: all 0.3s ease 0s;
    &:hover {
        background-color: #a749ff;
        color: #fff;
    }
`;

const CartTotal = styled(FlexDirection)`
    background-color: #f9f9f9;
    border: 1px solid #ebebeb;
    border-radius: 5px;
    padding: 45px 30px 50px;
    width: 30%;
    & h1 {
        display: inline-block;
        font-size: 18px;
        font-weight: 500;
        margin: 0;
        padding-right: 18px;
    }
    
`;

const SpaceBetweenBefore = styled(SpaceBetween)`
    display: flex;
    justify-content: space-between;
    & :before {
        background-color: red;
        content: "";
        height: 1px;
        left: 0;
        position: absolute;
        top: 10px;
        -webkit-transition: all 0.4s ease 0s;
        transition: all 0.4s ease 0s;
        width: 100px;
        z-index: 1;
    }
`;

const Cart = () => {
    const dispatch          = useDispatch()

    const addToCartProduct  = useSelector((state) => state.counter.cart)
    
    const total             = addToCartProduct.reduce((total, currentValue) => total = total + currentValue.subtotal,0);
    return (
        <Container maxWidth="100%">
            <Container backgroundColor="#F7F7F7" maxWidth="100%">
                <Center padding="35px 0">
                    <Text>HOME / CART PAGE</Text>
                </Center>
            </Container>
            <Container margin="5% auto 30px">
                <H4 color="black">Your cart items</H4>
                <Table>
                    <THead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Until Price</th>
                            <th>Qty</th>
                            <th>Subtotal</th>
                            <th>action</th>
                        </tr>
                    </THead>
                    <TBody>
                        {addToCartProduct.map((item) => (

                            <tr key={item.id}>
                                <td>
                                    <ATag><img src={item.image} alt="" /></ATag>
                                </td>
                                <td>
                                    <ATag>Product Name</ATag>
                                </td>
                                <td>
                                    <Text>${item.price}.00</Text>
                                </td>
                                <td>
                                    <ActionButton>
                                        <DecrementButton onClick={() => dispatch(decrement({id:item.id}))}>-</DecrementButton>
                                        <InputQty value={item.qty} readOnly/>
                                        <IncrementButton onClick={() => dispatch(increment({id:item.id}))}>+</IncrementButton>
                                    </ActionButton>
                                </td>
                                <td>
                                    <Text>${item.subtotal}.00</Text>
                                </td>
                                <td>
                                    <Center margin="10%">
                                        <ATag><EditIcon sx={{ margin: '0 10px' }}/></ATag>
                                        <ATag><CloseIcon onClick={() => dispatch(removeToCart({id:item.id}))} sx={{ margin: '0 10px' }}/></ATag>
                                    </Center>
                                </td>
                            </tr>
                        ))}
                    </TBody>
                </Table>
            </Container>
            <Container>
                <SpaceBetween>
                    <Link to="/">
                        <CartButton>
                            Continue Shopping
                        </CartButton>
                    </Link>
                    <SpaceBetween margin="0" width="50%">
                    <CartButton>
                        Update Shopping
                    </CartButton>
                    <CartButton onClick={() => dispatch(emptyCart())}>
                        Clear Shopping Cart
                    </CartButton>
                    </SpaceBetween>
                </SpaceBetween>
            </Container>
            <Container>
                <FlexEnd>
                    <SpaceBetween width="20%">
                        <H4>Cart Total:</H4>
                        <H4>${total}.00</H4>
                    </SpaceBetween>
                </FlexEnd>
                
            </Container>
        </Container>
    );
}
 
export default Cart;