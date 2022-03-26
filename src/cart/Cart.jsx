import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react'
import { increment, decrement, removeToCart } from '../app/counter'
import styled from 'styled-components';
import { ATag, Center, Container, H4, Table, TBody, Text, THead } from "../App.style";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonQty, InputQty, ActionButton } from "./Cart.style";

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

const Cart = () => {
    const dispatch          = useDispatch()

    const addToCartProduct  = useSelector((state) => state.counter.cart)
    const count             = useSelector((state) => state.counter.value)


    
    const [total, setTotal] = useState(110);

    // const handleChange = (e) => {
    //     let value = e.target.value;
    //     console.log(value);
    // }
    console.log(addToCartProduct);
    return (
        <Container maxWidth="100%">
            <Container backgroundColor="#F7F7F7" maxWidth="100%">
                <Center padding="35px 0">
                    <Text>HOME / CART PAGE</Text>
                </Center>
            </Container>
            <Container margin="5% auto">
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
        </Container>
    );
}
 
export default Cart;