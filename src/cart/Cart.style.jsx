import styled from 'styled-components'

export const InputQty = styled.input.attrs({
    type: 'number',
    value: 1,
    width: '10%',
})`
    background: transparent;
    font-size: 13px;
    color: #333;
    border: none;
    padding: 2px 10px 2px 0;
    box-shadow: none;
    outline: none;
`;