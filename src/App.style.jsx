import styled from 'styled-components';

// Grid
export const Container = styled.div`
    max-width: 90%;
    margin: 0 auto;
`;

// Flex
export const SpaceBetween = styled.div`
    margin: 7px 0;
    display: flex;
    justify-content: space-between;
`;

export const FlexEnd = styled.div`
    margin: 7px 0;
    display: flex;
    justify-content: flex-end;
`;


// Border
export const BorderBottom = styled.div`
    top: 20px;
    border-bottom: 1px solid #D5D4D4;
    width: 100%;
`;

export const BorderVertical = styled.div`
    display: flex;
    justify-content: space-between;
    border-left: 1px solid #D5D4D4;
    height: auto;
    margin: 0 20px;
    align-items: stretch;
`;


// Other Default
export const ATag = styled.a`
    text-decoration: none;
    font-size: 14px;
    color: #555252;
    font-weight: 400;
    position: relative;
    &:hover {
        color: ${props => props.default ? "black" : "#AF49FF"};
    }
`;

export const Text = styled.p`
    color: ${props => props.red ? "red" : ""};
    font-size: 14px;
    margin: 0 0 0 5px;
`;

