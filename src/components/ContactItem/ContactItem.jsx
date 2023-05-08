import { useDeleteContactMutation } from 'redux/contactSlice';
import { Delete } from './Contactitem.styled';

const ContactItem = ({ contact: { name, phone, id } }) => {
  const [deleteContact, { isLoading: isDeliting }] = useDeleteContactMutation();
  return (
    <>
      <p>{name} :</p>
      <p>{phone}</p>
      <Delete onClick={() => deleteContact(id)} disabled={isDeliting}>
        {isDeliting ? 'Deliting...' : 'Delete'}
      </Delete>
    </>
  );
};

export default ContactItem;

//  CREATE BY REDUX

// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
// import { Delete } from './Contactitem.styled';

// const ContactItem = ({ contact: { name, phone, id } }) => {
//   const dispatch = useDispatch();
//   const handleDelete = () => dispatch(deleteContact(id));

//   return (
//     <>
//       <p>{name} :</p>
//       <p>{phone}</p>
//       <Delete onClick={handleDelete}>Delete</Delete>
//     </>
//   );
// };

// export default ContactItem;

// CREATED BY HOOK

// import PropTypes from 'prop-types';
// import { Delete } from './Contactitem.styled';

// const ContactItem = ({ name, number, onDeleteContact }) => {
//   return (
//     <>
//       <p>{name} :</p>
//       <p>{number}</p>
//       <Delete onClick={onDeleteContact}>Delete</Delete>
//     </>
//   );
// };

// ContactItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

// export default ContactItem;
