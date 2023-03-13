import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import { RiCloseCircleLine } from 'react-icons/ri';

export const Item = styled.li`
    width: calc((100% - 40px) / 3);
`;

export const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 5px;
`;

export const ContactIcon = styled(AiOutlineUser)`
    width: 40px;
    height: auto;
    fill: darkgray;
    margin-right: 20px;
`;

export const RemoveContactBtn = styled.button`
    background: none;
    width: 20px;
    height: 20px;
    color: darkgray;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        color: red;
    }
`;

export const RemoveContactIcon = styled(RiCloseCircleLine)`
    width: 20px;
    height: 20px;
    fill: currentColor;
`;

export const ContactName = styled.p`
    font-weight: 700;
    margin-bottom: 5px;
    text-align: center;
    color: #00af1a;
`;

export const ContactPhoneNumber = styled.p`
    color: darkgray;
    font-weight: 400;
    text-align: center;
`;
