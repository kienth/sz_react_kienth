import styled from 'styled-components';

// Grid
export const Container = styled.div`
    max-width: ${props => props.maxWidth || "90%"};
    padding: ${props => props.padding || "auto"};
    margin: 0 auto;
    background-color: ${props => props.backgroundColor || ""};;
`;

// Flex
export const SpaceBetween = styled.div`
    margin: 7px 0;
    padding: ${props => props.padding || "auto"};
    display: flex;
    justify-content: space-between;
`;

export const Center = styled.div`
    margin: ${props => props.margin || "auto"};
    padding: ${props => props.padding || "auto"};
    display: flex;
    justify-content: center;
`;

export const FlexEnd = styled.div`
    margin: 7px 0;
    display: flex;
    justify-content: flex-end;
`;

export const FlexDirection = styled.div`
    display: flex;
    gap: ${props => props.gap || "0"};
    flex-direction: ${props => props.flexDirection || "row"};
    margin: ${props => props.margin || "auto"};
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
    font-size: ${props => props.size || "14px"};
    font-weight: ${props => props.weight || "400"};
    color: ${props => props.color || ""};
    margin: ${props => props.margin || ""};
    padding: ${props => props.padding || "auto"};
    &:hover {
        color: ${props => props.default ? "black" : "#AF49FF"};
    }
`;

export const Text = styled.p`
    color: ${props => props.color || ""};
    font-size: ${props => props.fontSize || ""};
    margin: ${props => props.margin || "0"};
    text-transform: ${props => props.textTransform || "none"};
    font-weight: ${props => props.fontWeight || ""};
`;

export const H1 = styled.h1`
    font-weight: 400;
    color: ${props => props.color || ""};
    font-size: 72px;
    line-height: 20px;
`;

export const H3 = styled.h3`
    font-weight: 400;
    color: ${props => props.color || ""};
    font-size: 24px;
`;

