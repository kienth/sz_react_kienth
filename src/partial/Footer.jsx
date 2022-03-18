import { Container, SpaceBetween, FlexDirection, Text, ATag } from "../App.style";
import { PartialFooter, PartialFooterSub, PartialFooterSubHeader, PartialFooterLink, PartialFooterInput } from "./Partial.style";

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
                    <PartialFooterSub>
                        <PartialFooterSubHeader>
                            Follow Us
                        </PartialFooterSubHeader>
                        <PartialFooterLink>
                            <a href="#"> Facebook</a>
                        </PartialFooterLink>
                        <PartialFooterLink>
                            <a href="#"> Twitter</a>
                        </PartialFooterLink>
                        <PartialFooterLink>
                            <a href="#"> Instagram</a>
                        </PartialFooterLink>
                        <PartialFooterLink>
                            <a href="#"> Youtube</a>
                        </PartialFooterLink>
                    </PartialFooterSub>
                    <PartialFooterSub>
                        <PartialFooterSubHeader>
                            Subscribe
                        </PartialFooterSubHeader>
                        <PartialFooterLink>
                            <div>Get E-mail updates about our lates show <br/>and special offers.</div>
                        </PartialFooterLink>
                        <br />
                        <PartialFooterInput />
                        <hr />
                        <PartialFooterLink>
                            <a href="#"> SUBSCRIBE</a>
                        </PartialFooterLink>
                    </PartialFooterSub>
                </SpaceBetween>
            </Container>
        </PartialFooter>
     );
}
 
export default Footer;