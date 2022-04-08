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

export const HoverFlexDirection = styled.div`
    position: relative;
    overflow: hidden;
    &:hover div a {
        -webkit-transform: scaleX(1);
          transform: scaleX(1);
    }
`;

export const DefaultImg = styled.img`
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    /* &:hover {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        visibility: hidden;
    } */
`;

export const HoverImg = styled.img`
    position: absolute;
    top: 0px;
    visibility: hidden;
    left: 0px;
    width: 100%;
    opacity: 0;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-transform: translateX(100%);
          transform: translateX(100%);
    /* &:hover {
        visibility: visible;
        opacity: 1;
        -webkit-transform: translateX(0);
        transform: translateX(0);
    } */
`;

export const ProductImg = styled.div`
    position: relative;
    & img {
        width: 100%;
    }
    & span {
        font-size: 14px;
        font-weight: 500;
        position: absolute;
        top: 20px;
        right: 20px;
    }

    &:hover {
        ${DefaultImg} {
            -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
            visibility: hidden;
        }

        ${HoverImg} {
            visibility: visible;
            opacity: 1;
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
    }
`;



export const ProductAction = styled.div`
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    width: 100%;
`;

export const ProductActionA = styled.a`
    display: inline-block;
    line-height: 1;
    width: 42px;
    height: 42px;
    line-height: 42px;
    font-size: 16px;
    background-color: #a749ff;
    color: #fff;
    text-align: center;
    border-radius: 50px;
    margin: 0 3px;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    &:hover {
        background-color: #fa6bff;
    }
     * {
        color: white;
    }
`;