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