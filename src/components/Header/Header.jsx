import PropTypes from 'prop-types';
import { HeaderContainer, HeaderTitle, NewContactBtn } from './Header.styled';

export const Header = ({ isOpenForm, toggle }) => (
    <HeaderContainer>
        <HeaderTitle>PHONEBOOK</HeaderTitle>
        <NewContactBtn type="button" onClick={toggle}>
            {isOpenForm ? 'Cancel' : '+ New contact'}
        </NewContactBtn>
    </HeaderContainer>
);

Header.propTypes = {
    isOpenForm: PropTypes.bool,
    toggle: PropTypes.func,
};
