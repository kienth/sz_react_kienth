import { PartialFooter, PartialFooterSub, PartialFooterSubHeader, PartialFooterLink, PartialFooterInput } from "./Partial.style";

const Footer = () => {
    return ( 
        <PartialFooter>
            <PartialFooterSub>
                <div><img src="https://template.hasthemes.com/flone/flone/assets/img/logo/logo.png" /></div>
                <div>© 2021 Flone. <br />
                All Rights Reserved</div>
            </PartialFooterSub>
            <PartialFooterSub>
                <PartialFooterSubHeader>
                    About Us
                </PartialFooterSubHeader>
                <PartialFooterLink>
                    <a href="#"> About us</a>
                </PartialFooterLink>
                <PartialFooterLink>
                    <a href="#"> Store location</a>
                </PartialFooterLink>
                <PartialFooterLink>
                    <a href="#"> Contact</a>
                </PartialFooterLink>
                <PartialFooterLink>
                    <a href="#"> Orders tracking</a>
                </PartialFooterLink>
            </PartialFooterSub>
            <PartialFooterSub>
            <PartialFooterSubHeader>
                    Userful Links
                </PartialFooterSubHeader>
                <PartialFooterLink>
                    <a href="#"> Returns</a>
                </PartialFooterLink>
                <PartialFooterLink>
                    <a href="#"> Support Policy</a>
                </PartialFooterLink>
                <PartialFooterLink>
                    <a href="#"> Size guide</a>
                </PartialFooterLink>
                <PartialFooterLink>
                    <a href="#"> FAQs</a>
                </PartialFooterLink>
            </PartialFooterSub>
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
                    
        </PartialFooter>
     );
}
 
export default Footer;