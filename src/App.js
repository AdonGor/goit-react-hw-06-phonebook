import { getVisibleContacts } from './components/redux/phonebook-selectors';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { useSelector } from 'react-redux';
import './App.css';

export default function App() {
  const contacts = useSelector(getVisibleContacts);
  const totalContactsCount = contacts.length;
  
    return (
    <>
      <h1 className='header'>Phonebook</h1>
      <ContactForm />
      <h2 className='header'>Contacts</h2>
      <p className='header'>Общее кол-во: {totalContactsCount}</p>
      <Filter />
      <ContactList />
    </>
  );
}
