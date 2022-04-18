import { useState, useEffect } from 'react';
import sortContactsByName from 'utils/sortContactsByName';
import AppName from 'components/AppName';
import ContactForm from 'components/ContactForm';
import SectionName from 'components/SectionName';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { AppContainer } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? []
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const showNotification = message => {
    toast.info(message);
  };

  const addContactToList = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const normalizedName = name.toLowerCase();

    if (contacts.find(contact => contact.name.toLowerCase() === normalizedName)) {
      showNotification('This contact name is already in your phonebook');
      return;
    };

    setContacts(prevContacts => ([...prevContacts, contact].sort(sortContactsByName)));
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return (
      contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
    );
  };
  
  const totalContactCount = contacts.length;

  const deleteContact = (contactId) => {
    setContacts(prevContacts => (prevContacts.filter(contact => contact.id !== contactId)));
  };

  return (
    <AppContainer>
      <AppName title='Phonebook' />
      <ContactForm onSubmit={addContactToList} />
      <SectionName title='Contacts' />
      <Filter label='Find contacts by name' value={filter} onChange={changeFilter} />
      <ContactList contacts={getVisibleContacts()} contactsAmount={totalContactCount} onDeleteContact={deleteContact} />
      <ToastContainer />
    </AppContainer> 
  );
};