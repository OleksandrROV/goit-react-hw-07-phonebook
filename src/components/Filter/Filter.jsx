import { getFilter } from 'components/ContactList/ContactList';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);

  return (
    <label htmlFor="">
      <input
        type="text"
        placeholder="Find contacts by name"
        name="filter"
        value={filterValue}
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </label>
  );
};

export default Filter;
