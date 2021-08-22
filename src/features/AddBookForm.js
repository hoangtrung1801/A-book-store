import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addBook } from './bookSlice';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();

    dispatch(addBook({title}));
    history.push('/mybook');
  }

  return (
    <div className="AddBookForm">
      <form onSubmit={submit}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" onChange={(e) => setTitle(e.target.value)}/>

        <label htmlFor="image">Image</label>
        <input type="file" id="image" />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddBookForm;