import { useSelector } from "react-redux";
import { ATag, Center, Container, FlexDirection, H4, SpaceBetween, Table, TBody, Text, THead } from "../App.style";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { ButtonQty, InputQty } from "./Cart.style";

const Cart = () => {
    const addToCartProduct = useSelector((state) => state.counter.cart)
    // const [qty, setQty] = useState({});

    return (
        <Container backgroundColor="#F7F7F7" maxWidth="100%">
            <Center padding="35px 0">
                <Text>HOME / CART PAGE</Text>
            </Center>
            <Container margin="10% auto" maxWidth="90%">
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
                        <tr>
                            <td>
                                <ATag><img src="https://template.hasthemes.com/flone/flone/assets/img/cart/cart-1.png" alt="" /></ATag>
                            </td>
                            <td>
                                <ATag>Product Name</ATag>
                            </td>
                            <td>
                                <Text>$260.00</Text>
                            </td>
                            <td>
                                <FlexDirection>
                                    <ButtonQty>-</ButtonQty>
                                    <InputQty />
                                    <ButtonQty>+</ButtonQty>
                                </FlexDirection>
                            </td>
                            <td>
                                <Text>$110.</Text>
                            </td>
                            <td>
                                <Center margin="10%">
                                    <EditIcon sx={{ margin: '0 10px' }}/>
                                    <CloseIcon sx={{ margin: '0 10px' }}/>
                                </Center>
                            </td>
                        </tr>
                    </TBody>
                </Table>
            </Container>
            <Container>
                {addToCartProduct.map((item) => (
                    <Container key={item.id}>
                        <img src={item.image} alt="" />
                        <h3>{item.price}</h3>
                    </Container>
                ))}
            </Container>
        </Container>
    );
}
 
export default Cart;