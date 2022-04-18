import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';
import { TotalContactsText, TotalContactsNum, PhonebookList, ListElement, NotificationText } from './ContactList.styled';

export default function ContactList({ contacts, contactsAmount, onDeleteContact }) {
    return (
        contactsAmount > 0
        ? <>
            <TotalContactsText>Contacts amount: <TotalContactsNum>{contactsAmount}</TotalContactsNum></TotalContactsText>
            <PhonebookList>
                {contacts.map(({ id, name, number }) =>
                    <ListElement key={id}>
                        <ContactItem id={id} name={name} number={number} onDeleteContact={onDeleteContact} />
                    </ListElement>)}
            </PhonebookList>
          </>
        : <NotificationText>There are no contacts in your phonebook</NotificationText>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
        })
    ),
    contactsAmount: PropTypes.number.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};