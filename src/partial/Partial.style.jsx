import styled from 'styled-components';

export const PartialUpperNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    padding: 10px 5%;
    border-bottom: 1px solid #D5D4D4;
`;

export const PartialUpperLeft = styled.div`
    display: flex;
    justify-content: space-between;
    border-left: 1px solid #848181;
    height: 20px;
    vertical-align: center;
`;

export const PartialNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 100%;
    padding: 30px 5%;
    background-color: color;
`;

export const PartialLink = styled.div`
    display: flex;
    max-width: 100%;
    justify-content: space-evenly;
    a {
        padding: 0 20px;
        font-size: 15px;
        color: #555252;
        font-weight: 500;
        letter-spacing: 0.8px;
        position: relative;
        text-decoration: none;
    }
    a:hover {
        color: #AF49FF;
    }
    span {
        padding: 0 5px;
        font-size: 15px;
        color: #555252;
        font-weight: 500;
        letter-spacing: 0.8px;
        position: relative;
        text-decoration: none;
    }
`;

export const PartialFooter = styled.div`
    height: 200px;
    display: flex;
    max-width: 100%;
    justify-content: space-between;
    margin: 0;
    padding: 7%;
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
    line-height: 1;
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
 