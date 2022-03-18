import { Container, SpaceBetween, FlexDirection, Text, ATag, BorderBottom } from "../App.style";
import { PartialFooter, PartialFooterInput } from "./Partial.style";

const Footer = () => {
    return ( 
        <PartialFooter>
            <Container>
                <SpaceBetween>
                    <FlexDirection flexDirection="column" margin="auto 0">
                        <img src="https://template.hasthemes.com/flone/flone/assets/img/logo/logo.png" />
                        <Text>© 2021 Flone. <br />
                        All Rights Reserved</Text>
                    </FlexDirection>
                    <FlexDirection flexDirection="column" margin="auto 0" gap="15px">
                        <Text textTransform="uppercase" fontWeight="600" fontSize="16px" color="#313131">
                            About Us
                        </Text>
                        <ATag>
                            About us
                        </ATag>
                        <ATag>
                            Store location
                        </ATag>
                        <ATag>
                            Contact
                        </ATag>
                        <ATag>
                            Orders tracking
                        </ATag>
                    </FlexDirection>
                    <FlexDirection flexDirection="column" margin="auto 0" gap="15px">
                        <Text textTransform="uppercase" fontWeight="600" fontSize="16px" color="#313131">
                            Userful Links
                        </Text>
                        <ATag>
                            Returns
                        </ATag>
                        <ATag>
                            Support Policy
                        </ATag>
                        <ATag>
                            Size guide
                        </ATag>
                        <ATag>
                            FAQs
                        </ATag>
                    </FlexDirection>
                    <FlexDirection flexDirection="column" margin="auto 0" gap="15px">
                        <Text textTransform="uppercase" fontWeight="600" fontSize="16px" color="#313131">
                            Follow Us
                        </Text>
                        <ATag>
                            Facebook
                        </ATag>
                        <ATag>
                            Twitter
                        </ATag>
                        <ATag>
                            Instagram
                        </ATag>
                        <ATag>
                            Youtube
                        </ATag>
                    </FlexDirection>
                    <FlexDirection flexDirection="column" margin="auto 0" gap="15px">
                        <Text textTransform="uppercase" fontWeight="600" fontSize="16px" color="#313131">
                            Subscribe
                        </Text>
                        <Text>
                            Get E-mail updates about our latest show <br /> and special offers.
                        </Text>
                        <PartialFooterInput />
                        <BorderBottom />
                        <ATag>
                            SUBSCRIBE
                        </ATag>
                    </FlexDirection>
                </SpaceBetween>
            </Container>
        </PartialFooter>
     );
}
 
export default Footer;