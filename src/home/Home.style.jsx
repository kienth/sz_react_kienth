import styled from 'styled-components';

export const HomeSlider = styled.div`
    max-width: 100%;
    padding: 10% 5%;
    display: flex;
    justify-content: space-between;
    background-color: #DBFFFB;
`;

export const HomeSliderText = styled.div`
    flex-direction: row-reverse;
    padding: 0;
    padding-top: 50px;
    h3 {
        font-size: 24px;
        font-weight: 500;
        margin: 0;
        color: black;
    }
    h1 {
        line-height: 97px;
        font-size: 72px;
        color: #010101;
        margin: 6px 0 37px;
    }
`;

export const DailyDealsContainer = styled.div`
    padding-top: 80px;
`;

export const SectionTitle = styled.div`
    display: flex;
    margin-top: 50px;
    justify-content: center;
    h1 {
        font-size: 2rem;
        font-weight: 900 !important;
        color: black;
    }
    h1:before,
    h1:after {
    background-color: #000;
    content: "";
    display: inline-block;
    height: 2px;
    position: relative;
    vertical-align: middle;
    width: 50%;
    }

    h1:before {
    right: 0.5em;
    margin-left: -50%;
    }

    h1:after {
    left: 0.5em;
    margin-right: -50%;
    }
`;

export const ProductTabList = styled.div`
    display: flex;
    justify-content: center;
    a {
        margin: 0 15px;
    }
    a h3:hover {
        color: black;
    }
    a:not(:first-child):not(:last-child) {
        h3 {
            color: black;
        }
        
    }
`;

export const TabContent = styled.div`
  
`;