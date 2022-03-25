import styled from 'styled-components';

// Grid
export const Container = styled.div`
    max-width: ${props => props.maxWidth || "90%"};
    width: ${props => props.width || ""};
    flex-wrap: ${props => props.flexWrap || ""};
    display: ${props => props.display || ""};
    padding: ${props => props.padding || "auto"};
    margin: ${props => props.margin || "0 auto"};
    background-color: ${props => props.backgroundColor || ""};
`;

// Flex
export const SpaceBetween = styled.div`
    margin: ${props => props.margin || "7px 0"};
    padding: ${props => props.padding || "auto"};
    display: flex;
    justify-content: space-between;
    width: ${props => props.width || "auto"};
`;

export const Center = styled.div`
    margin: ${props => props.margin || "auto"};
    padding: ${props => props.padding || "auto"};
    display: flex;
    justify-content: center;
    background-color: ${props => props.backgroundColor || ""};
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

export const FlexWrap = styled.div`
    flex-wrap: ${props => props.flexWrap || "wrap"};
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

// Table
export const Table = styled.table`
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
    min-width: 650px;
    margin: auto;
    text-indent: initial;
    border-spacing: 2px;
    border: 1px solid #ebebeb;
    caption-side: bottom;
    width: 100%;
`;

export const THead = styled.thead`
    display: table-header-group;

    & tr {
        color: inherit;
        display: table-row;
        vertical-align: middle;
        outline: 0;
        background-color: #f9f9f9;
        border: 1px solid #ebebeb;
    }

    & tr th {
        border-top: medium none;
        color: #333;
        font-size: 14px;
        font-weight: 500;
        padding: 21px 45px 22px;
        text-align: center;
        text-transform: uppercase;
        vertical-align: middle;
        white-space: nowrap;
    }
`;

export const TBody = styled.tbody`
    display: table-row-group;
    & tr {
        color: inherit;
        display: table-row;
        vertical-align: middle;
        outline: 0;
    }

    & tr td {
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.43;
        letter-spacing: 0.01071em;
        display: table-cell;
        vertical-align: inherit;
        border-bottom: 1px solid rgba(224, 224, 224, 1);
        text-align: left;
        padding: 16px;
        color: rgba(0, 0, 0, 0.87);
    }

    & img {
        width: 100px;
        height: 100px;
        object-fit: cover;
    }
`;


// Other Default
export const ATag = styled.a`
    cursor: pointer;
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

export const H4 = styled.h3`
    font-weight: 400;
    color: ${props => props.color || ""};
    font-size: 20px;
`;

