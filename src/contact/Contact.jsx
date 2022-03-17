import { ContactStyle, ContactLeft, ContactInfoWrap, SingleContactInfo, ContactInfoDec, ContactRight, ContactForm, ContactTitle } from './Contact.style';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Contact = () => {
    return (
        <ContactStyle>
            <ContactLeft>
                <ContactInfoWrap>
                    <SingleContactInfo>
                        <LocalPhoneIcon sx={{ marginRight: '20px' }}/>
                        <ContactInfoDec>
                            <p>+012 345 678 102</p>
                            <p>+012 345 678 102</p>
                        </ContactInfoDec>
                    </SingleContactInfo>
                    <SingleContactInfo>
                        <PublicIcon sx={{ marginRight: '20px' }}/>
                        <ContactInfoDec>
                            <p>
                                <a href="#">urname@email.com</a>
                            </p>
                            <p>
                                <a href="#">urwebsitenaem.com</a>
                            </p>
                        </ContactInfoDec>
                    </SingleContactInfo>
                    <SingleContactInfo>
                        <LocationOnIcon sx={{ marginRight: '20px' }}/>
                        <ContactInfoDec>
                            <p>Address goes here, </p>
                            <p>street, Crossroad 123.</p>
                        </ContactInfoDec>
                    </SingleContactInfo>
                </ContactInfoWrap>
            </ContactLeft>
            <ContactRight>
                <ContactForm>
                    <h2>Get In Touch</h2>
                </ContactForm>
            </ContactRight>
        </ContactStyle>
        
    );
}
 
export default Contact;