import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/phonebook-actions';
import {getVisibleContacts} from '../redux/phonebook-selectors'
import styles from './ContactList.module.css';

function ContactList() {

  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(actions.deleteContact(id));

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <p className={styles.text}>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className={styles.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}


export default ContactList;
