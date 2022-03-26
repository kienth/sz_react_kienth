import styled from 'styled-components'

export const ActionButton = styled.div`
display: inline-block;
    height: 40px;
    padding: 0;
    position: relative;
    width: 110px;
    `;

export const InputQty = styled.input.attrs({
    type: 'number',
})`
    color: #333;
    float: left;
    font-size: 14px;
    height: 40px;
    margin: 0;
    width: 110px;
    background: transparent none repeat scroll 0 0;
    border: 1px solid #e1e1e1;
    padding: 0;
    text-align: center;
    
`;

export const ButtonQty = styled.div`
    color: #333;
    cursor: pointer;
    float: inherit;
    font-size: 16px;
    margin: 0;
    position: absolute;
    -webkit-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
    width: 20px;
    text-align: center;
`;
