import React, { useState } from 'react';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contactSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [addContact, { isLoading }] = useAddContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  const handleSubmit = async event => {
    event.preventDefault();
    reset();

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : await addContact({ name, number });
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value.trim());

        break;
      case 'number':
        setNumber(value.trim());
        break;

      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '15px' }}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>

      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add contact'}
      </button>
    </form>
  );
};
export default ContactForm;

// CREATED BY REDUX

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contactsSlice';
// import { getContacts } from 'redux/selectors';

// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const dispatch = useDispatch();
//   const contacts = useSelector(getContacts);

//   const handleSubmit = event => {
//     event.preventDefault();

//     contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
//       ? alert(`${name} is already in contacts`)
//       : dispatch(addContact(name, number));

//     reset();
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   const handleChange = event => {
//     const { name, value } = event.target;
//     switch (name) {
//       case 'name':
//         setName(value.trim());

//         break;
//       case 'number':
//         setNumber(value.trim());
//         break;

//       default:
//         return;
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '15px' }}>
//       <label>
//         Name
//         <input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           value={name}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Number
//         <input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           value={number}
//           onChange={handleChange}
//         />
//       </label>

//       <button type="submit">Add contact</button>
//     </form>
//   );
// };
// export default ContactForm;

// CREATED BY HOOKS

// import React, { useState } from 'react';
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

// const ContactForm = ({ onSubmit }) => {
//   PropTypes.ContactForm = {
//     contacts: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//       }).isRequired
//     ),
//     filter: PropTypes.string.isRequired,
//   };

//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');
//   const [id, setId] = useState(() => nanoid());

//   const handleSubmit = event => {
//     event.preventDefault();
//     setId(nanoid());
//     onSubmit({ name, number, id });
//     reset();
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   const handleChange = event => {
//     const { name, value } = event.target;
//     switch (name) {
//       case 'name':
//         setName(value.trim());

//         break;
//       case 'number':
//         setNumber(value.trim());
//         break;

//       default:
//         return;
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '15px' }}>
//       <label>
//         Name
//         <input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           value={name}
//           onChange={handleChange}
//         />
//       </label>
//       <label>
//         Number
//         <input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           value={number}
//           onChange={handleChange}
//         />
//       </label>

//       <button type="submit">Add contact</button>
//     </form>
//   );
// };
// export default ContactForm;

// CREATED BY CLASS

// class ContactForm extends Component {
//   static defaultPropTypes = {
//     contacts: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//       }).isRequired
//     ),
//     filter: PropTypes.string.isRequired,
//   };

//   state = { name: '', number: '', id: nanoid() };

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSumit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => this.setState({ name: '', number: '' });

//   render() {
//     const { name, number } = this.state;

//     return (
//       <form
//         onSubmit={this.handleSumit}
//         style={{ display: 'flex', gap: '15px' }}
//       >
//         <label>
//           Name
//           <input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={name}
//             onChange={this.handleChange}
//           />
//         </label>
//         <label>
//           Number
//           <input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={number}
//             onChange={this.handleChange}
//           />
//         </label>

//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }

// export default ContactForm;
