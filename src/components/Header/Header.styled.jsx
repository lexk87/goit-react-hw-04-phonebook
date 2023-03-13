import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding: 0 20px;
    width: 100%;
    border-radius: 4px;
    box-shadow: 0px 4px 8px -2px rgba(9, 30, 66, 0.25),
        0px 0px 0px 1px rgba(9, 30, 66, 0.08);
`;

export const HeaderTitle = styled.h1`
    padding: 20px 0;
    color: #00af1a;
    margin-right: auto;
`;

export const NewContactBtn = styled.button`
    min-width: 130px;
    height: 40px;
    border-radius: 4px;
    background-color: #00af1a;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        background-color: #02bf19;
    }
`;
