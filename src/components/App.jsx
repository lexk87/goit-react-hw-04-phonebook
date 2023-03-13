import React, { Component } from 'react';
import {
    Container,
    Header,
    ContactForm,
    ContactsTitle,
    Filter,
    ContactList,
    ContactsContainer,
    NoSavedContacts,
    NoFilteredContacts,
} from 'components';
import { dataStorage } from 'services/dataStorage';

const LOCALSTORAGE_KEY = 'Contacts';

export class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
        isOpenForm: false,
    };

    componentDidMount() {
        const savedContacts = dataStorage.getData(LOCALSTORAGE_KEY);

        savedContacts && this.setState({ contacts: savedContacts });
    }

    componentDidUpdate(prevState) {
        if (prevState.contacts !== this.state.contacts) {
            dataStorage.setData(LOCALSTORAGE_KEY, this.state.contacts);
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            isOpenForm: !prevState.isOpenForm,
        }));
    };

    addContact = newContact => {
        const { contacts } = this.state;

        const isContactIncluded = contacts.some(
            contact =>
                contact.name.toLowerCase() === newContact.name.toLowerCase()
        );

        isContactIncluded
            ? alert(`${newContact.name} is already in contacts`)
            : this.setState(prevState => ({
                  contacts: [newContact, ...prevState.contacts],
              }));
    };

    onFilterChange = e => {
        this.setState({ filter: e.currentTarget.value });
    };

    filteredContacts = () => {
        const { contacts, filter } = this.state;
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    removeContact = id => {
        this.setState(prevState => {
            return {
                contacts: prevState.contacts.filter(
                    contact => contact.id !== id
                ),
            };
        });
    };

    render() {
        const { contacts, filter, isOpenForm } = this.state;

        return (
            <>
                <Container>
                    <Header isOpenForm={isOpenForm} toggle={this.toggle} />
                    {isOpenForm && <ContactForm addContact={this.addContact} />}

                    <ContactsContainer>
                        <ContactsTitle />
                        {contacts.length > 0 && (
                            <Filter
                                value={filter}
                                onChange={this.onFilterChange}
                            />
                        )}
                        {!contacts.length && <NoSavedContacts />}
                        {contacts.length > 0 &&
                            !this.filteredContacts().length && (
                                <NoFilteredContacts />
                            )}
                        {this.filteredContacts().length > 0 && (
                            <ContactList
                                contacts={this.filteredContacts()}
                                removeContact={this.removeContact}
                            />
                        )}
                    </ContactsContainer>
                </Container>
            </>
        );
    }
}
