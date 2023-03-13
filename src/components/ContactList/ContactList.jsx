import PropTypes from 'prop-types';
import { PhonebookList } from './ContactList.styled';
import { ContactListItem } from 'components';

export const ContactList = ({ contacts, removeContact }) => {
    return (
        <>
            <PhonebookList>
                {contacts.map(({ id, name, number }) => (
                    <ContactListItem
                        key={id}
                        id={id}
                        name={name}
                        number={number}
                        removeContact={removeContact}
                    />
                ))}
            </PhonebookList>
        </>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    removeContact: PropTypes.func,
};
