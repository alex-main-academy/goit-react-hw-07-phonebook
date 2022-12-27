import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import css from './ContactsList.module.css';

const ContactsList = () => {
  let userContacts = useSelector(state => state.contacts.item);
  const searchFilter = useSelector(state => state.filter);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (searchFilter !== '') {
    userContacts = userContacts.filter(({ name }) =>
      name.toLowerCase().includes(searchFilter.toLowerCase())
    );
  }

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <ul className={css.contacts__list}>
      {userContacts.map(({ name, number, id }) => {
        return (
          <li key={id} className={css.contacts__item}>
            {name} {number}
            <button
              className={css.contacts__delete}
              onClick={() => dispatch(deleteContact(id))}
            >
              x
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactsList;
