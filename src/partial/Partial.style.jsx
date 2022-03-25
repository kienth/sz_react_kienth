import styled from 'styled-components';

export const PartialNavbar = styled.div`
    max-width: 100%;
    padding: 20px 0;
`;

export const PartialFooter = styled.div`
    margin-top: 10%;
    padding: 7% 0;
    background-color: #F6F6F8;
`;

export const PartialFooterSub = styled.div`
    flex-direction: row-reverse;
    justify-content: flex-start;
    margin: auto 0;
`;

export const PartialFooterSubHeader = styled.span`
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    color: #313131;
`;

export const PartialFooterLink = styled.div`
    margin-top: 15px;
    a {
        text-decoration: none;
    }
    a:hover {
        color: #AF49FF;
    }
`;

export const PartialFooterInput = styled.input.attrs({
    type: 'text',
    placeholder: 'Enter your email here..'
})`
    background: transparent;
    font-size: 13px;
    color: #333;
    border: none;
    padding: 2px 10px 2px 0;
    box-shadow: none;
    outline: none;
`;
 