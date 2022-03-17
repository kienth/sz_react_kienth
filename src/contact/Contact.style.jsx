import styled from 'styled-components';

export const ContactStyle = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px;
    justify-content: center;
`;
export const ContactLeft = styled.div`
    padding-left: 5px;
    padding-right: 5px;
    width: 40%;
`;

export const ContactInfoWrap = styled.div`
    background-color: #f3f3f3;
    padding: 120px 70px 116px 90px;
`;

export const SingleContactInfo = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 40px;
`;

export const ContactInfoDec = styled.div`
    p {
        line-height: 1;
        color: #404040;
        margin: 0 0 9px;
        
    }
    p:last-child {
        margin: 0;
    }
    a:hover {
        color: #AF49FF;
    }
    a {
        line-height: 1;
        color: #404040;
        margin: 0 0 9px;
    }
    a:last-child {
        margin: 0;
    }
`;

export const ContactRight = styled.div`
    padding-left: 5px;
    padding-right: 5px;
    width: 49%;
`;

export const ContactForm = styled.div`
    background-color: #f3f3f3;
    padding: 50px 110px 50px 110px;
`;

export const ContactTitle = styled.div`
    margin-bottom: 30px;
    h2 {
        font-size: 24px;
        font-weight: 500;
        color: #464646;
        line-height: 1;
        margin-bottom: 36px;
    }
`;