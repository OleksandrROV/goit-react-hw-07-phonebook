import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contactSlice';

export const getFilter = state => state.filter;

const ContactList = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const filterValue = useSelector(getFilter);
  const getVisibleContacts = () => {
    const normalizedFilter = filterValue.toLocaleLowerCase();
    return filterValue
      ? contacts.filter(contact =>
          contact.name.toLocaleLowerCase().includes(normalizedFilter)
        )
      : contacts;
  };
  const filteredContact = getVisibleContacts();
  return (
    <ul>
      {isFetching && <h2>Loading...</h2>}
      {contacts &&
        filteredContact.map(contact => (
          <li
            key={contact.id}
            style={{
              display: 'grid',
              gridTemplateColumns: '160px 150px 100px',
              alignItems: 'center',
            }}
          >
            <ContactItem contact={contact} />
          </li>
        ))}
    </ul>
  );
};

export default ContactList;

// CREATED BY HOOK

// import PropTypes from 'prop-types';
// import ContactItem from 'components/ContactItem/ContactItem';

// const ContactList = ({ contacts, onDeleteContact }) => (
//   <ul>
//     {contacts.map(({ id, name, number }) => (
//       <li
//         key={id}
//         style={{
//           display: 'grid',
//           gridTemplateColumns: '140px 140px 100px',
//           alignItems: 'center',
//         }}
//       >
//         <ContactItem
//           name={name}
//           number={number}
//           onDeleteContact={() => onDeleteContact(id)}
//         />
//       </li>
//     ))}
//   </ul>
// );

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

// export default ContactList;
