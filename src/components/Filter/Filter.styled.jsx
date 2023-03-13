import styled from 'styled-components';

export const FilterContainer = styled.div`
    margin-bottom: 20px;
`;

export const FilterLabel = styled.label``;

export const LabelInfo = styled.p`
    color: darkgray;
    font-weight: 700;
    margin-bottom: 5px;
`;

export const FilterInput = styled.input`
    width: 220px;
    height: 40px;
    padding: 0 10px;
    outline: none;
    border: 1px solid;
    border-color: darkgray;
    border-radius: 4px;
    font-size: 16px;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:focus {
        border-color: #00af1a;
    }
`;
