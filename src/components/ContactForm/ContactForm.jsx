import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FormWrapper, ContactSubmitForm, FormInputLabel, FormInput, FormSubmitBtn } from './ContactForm.styled';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onNameChange = evt => {
    setName(evt.currentTarget.value);
  };

  const onNumberChange = evt => {
    setNumber(evt.currentTarget.value);
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  const onContactFormSubmit = evt => {
    evt.preventDefault();
    const contact = {
      name,
      number
    };
    onSubmit(contact);
    formReset();
  };

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
    <FormWrapper>
      <ContactSubmitForm onSubmit={onContactFormSubmit}>
        <FormInputLabel htmlFor={nameInputId}>
          Name
          <FormInput
            type="text"
            name="name"
            placeholder="Type name here"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={onNameChange}
            id={nameInputId}
            required
          />
        </FormInputLabel>
        <FormInputLabel htmlFor={numberInputId}>
          Number
          <FormInput
            type="tel"
            name="number"
            placeholder="Type number here"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={onNumberChange}
            id={numberInputId}
            required
          />
        </FormInputLabel>
        <FormSubmitBtn type="submit">Add contact</FormSubmitBtn>
      </ContactSubmitForm>
    </FormWrapper> 
  );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};