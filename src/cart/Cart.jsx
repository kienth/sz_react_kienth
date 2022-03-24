import { Center, Container, H4, Table, Text, THead } from "../App.style";

const Home = () => {
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
                            <th>Product Name</th>
                            <th>Image</th><th>Until Price</th>
                            <th>Qty</th>
                            <th>Subtotal</th>
                            <th>action</th>
                        </tr>
                    </THead>
                </Table>
            </Container>
        </Container>
    );
}
 
export default Home;