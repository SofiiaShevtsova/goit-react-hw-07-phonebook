import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import Section from './Section/Section';
import Contacts from './Contacts/Contacts';
import FormAddContact from './FormAddContact/FormAddContact';
import FilterContact from './FilterContact/FilterContact';

export const App = () => {
  const contactsState = useSelector(state => state.phonebook.contacts);
  const filterContacts = useSelector(state => state.phonebook.filter);

  const contactToFind = useMemo(
    () =>
      contactsState.filter(elem =>
        elem.name.toLowerCase().includes(filterContacts)
      ),
    [filterContacts, contactsState]
  );

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: `column`,
        alignItems: `center`,
        color: '#010101',
      }}
    >
      <Section title={'Phonebook'}>
        <FormAddContact />
      </Section>
      <Section title={'Contacts'}>
        <FilterContact />
        <Contacts contacts={contactToFind} />
      </Section>
    </div>
  );
};
