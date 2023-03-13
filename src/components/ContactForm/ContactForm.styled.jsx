import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const FormContainer = styled.div`
    margin-bottom: 20px;
    padding: 20px;
    width: 100%;
    border-radius: 4px;
    box-shadow: 0px 4px 8px -2px rgba(9, 30, 66, 0.25),
        0px 0px 0px 1px rgba(9, 30, 66, 0.08);
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: top;
    gap: 20px;
    &:not(:last-child) {
        margin-bottom: 20px;
    }
`;

export const Label = styled.label`
    width: 220px;
`;

export const LabelTitle = styled.p`
    font-weight: 700;
    color: darkgray;
    margin-bottom: 5px;
`;

export const Input = styled(Field)`
    width: 100%;
    height: 40px;
    margin-bottom: 5px;
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

export const Error = styled(ErrorMessage)`
    font-size: 14px;
    color: red;
`;

export const Info = styled.p`
    color: darkgray;
    font-size: 11px;
`;

export const Button = styled.button`
    display: block;
    margin-left: auto;
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
