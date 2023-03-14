import { useState } from 'react';
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
import { useLocalStorage } from 'hooks/useLocalStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LOCALSTORAGE_KEY = 'Contacts';
const defaultContacts = [
    { id: 'id-1', name: 'Luke Skywalker', number: '459-12-56' },
    { id: 'id-2', name: 'Darth Vader', number: '443-89-12' },
    { id: 'id-3', name: 'Obi-Wan Kenobi', number: '645-17-79' },
    { id: 'id-4', name: 'Han Solo', number: '227-91-26' },
    { id: 'id-5', name: 'Leia Organa', number: '753-87-15' },
    { id: 'id-6', name: 'Chewbacca', number: '138-89-71' },
    { id: 'id-7', name: 'Jabba the Hutt', number: '528-91-37' },
    { id: 'id-8', name: 'C-3PO', number: '364-11-86' },
    { id: 'id-9', name: 'R2-D2', number: '859-48-93' },
];

export const App = () => {
    const [contacts, setContacts] = useLocalStorage(
        LOCALSTORAGE_KEY,
        defaultContacts
    );
    const [filter, setFilter] = useState('');
    const [isOpenForm, setIsOpenForm] = useState(false);

    const toggle = () => {
        setIsOpenForm(prevIsOpenForm => !prevIsOpenForm);
    };

    const addContact = newContact => {
        const isContactIncluded = contacts.some(
            contact =>
                contact.name.toLowerCase() === newContact.name.toLowerCase()
        );

        isContactIncluded
            ? toast.warn(`${newContact.name} is already in contacts`, {
                  position: 'top-right',
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: 'colored',
              })
            : setContacts(prevStateContacts => [
                  newContact,
                  ...prevStateContacts,
              ]);
    };

    const onFilterChange = e => {
        setFilter(e.currentTarget.value);
    };

    const filteredContacts = () => {
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    };

    const removeContact = id => {
        setContacts(prevStateContacts =>
            prevStateContacts.filter(contact => contact.id !== id)
        );
    };

    return (
        <>
            <Container>
                <Header isOpenForm={isOpenForm} toggle={toggle} />
                {isOpenForm && <ContactForm addContact={addContact} />}

                <ContactsContainer>
                    <ContactsTitle />
                    {contacts.length > 0 && (
                        <Filter value={filter} onChange={onFilterChange} />
                    )}
                    {!contacts.length && <NoSavedContacts />}
                    {contacts.length > 0 && !filteredContacts().length && (
                        <NoFilteredContacts />
                    )}
                    {filteredContacts().length > 0 && (
                        <ContactList
                            contacts={filteredContacts()}
                            removeContact={removeContact}
                        />
                    )}
                </ContactsContainer>
            </Container>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
};

// export class App extends Component {
//     state = {
//         contacts: [
//             { id: 'id-1', name: 'Luke Skywalker', number: '459-12-56' },
//             { id: 'id-2', name: 'Darth Vader', number: '443-89-12' },
//             { id: 'id-3', name: 'Obi-Wan Kenobi', number: '645-17-79' },
//             { id: 'id-4', name: 'Han Solo', number: '227-91-26' },
//             { id: 'id-5', name: 'Leia Organa', number: '753-87-15' },
//             { id: 'id-6', name: 'Chewbacca', number: '138-89-71' },
//         ],
//         filter: '',
//         isOpenForm: false,
//     };

//     componentDidMount() {
//         const savedContacts = dataStorage.getData(LOCALSTORAGE_KEY);

//         savedContacts && this.setState({ contacts: savedContacts });
//     }

//     componentDidUpdate(prevState) {
//         if (prevState.contacts !== this.state.contacts) {
//             dataStorage.setData(LOCALSTORAGE_KEY, this.state.contacts);
//         }
//     }

//     toggle = () => {
//         this.setState(prevState => ({
//             isOpenForm: !prevState.isOpenForm,
//         }));
//     };

//     addContact = newContact => {
//         const { contacts } = this.state;

//         const isContactIncluded = contacts.some(
//             contact =>
//                 contact.name.toLowerCase() === newContact.name.toLowerCase()
//         );

//         isContactIncluded
//             ? alert(`${newContact.name} is already in contacts`)
//             : this.setState(prevState => ({
//                   contacts: [newContact, ...prevState.contacts],
//               }));
//     };

//     onFilterChange = e => {
//         this.setState({ filter: e.currentTarget.value });
//     };

//     filteredContacts = () => {
//         const { contacts, filter } = this.state;
//         const normalizedFilter = filter.toLowerCase();

//         return contacts.filter(contact =>
//             contact.name.toLowerCase().includes(normalizedFilter)
//         );
//     };

//     removeContact = id => {
//         this.setState(prevState => {
//             return {
//                 contacts: prevState.contacts.filter(
//                     contact => contact.id !== id
//                 ),
//             };
//         });
//     };

//     render() {
//         const { contacts, filter, isOpenForm } = this.state;

//         return (
//             <>
//                 <Container>
//                     <Header isOpenForm={isOpenForm} toggle={this.toggle} />
//                     {isOpenForm && <ContactForm addContact={this.addContact} />}

//                     <ContactsContainer>
//                         <ContactsTitle />
//                         {contacts.length > 0 && (
//                             <Filter
//                                 value={filter}
//                                 onChange={this.onFilterChange}
//                             />
//                         )}
//                         {!contacts.length && <NoSavedContacts />}
//                         {contacts.length > 0 &&
//                             !this.filteredContacts().length && (
//                                 <NoFilteredContacts />
//                             )}
//                         {this.filteredContacts().length > 0 && (
//                             <ContactList
//                                 contacts={this.filteredContacts()}
//                                 removeContact={this.removeContact}
//                             />
//                         )}
//                     </ContactsContainer>
//                 </Container>
//             </>
//         );
//     }
// }
