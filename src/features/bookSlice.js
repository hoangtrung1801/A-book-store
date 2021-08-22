import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  status: 'idle',
  books: []
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const res = await axios.get('/api/books');
  return res.data;
})

export const addBook = createAsyncThunk('books/addBook', async (initialBook) => {
  const res = await axios.post('/api/books', initialBook);
  return res.data;
})

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {

  },

  extraReducers: {
    [fetchBooks.fulfilled]: (state, action) => {
      state.status = 'completed';
      state.books = state.books.concat(action.payload);
    },
    [addBook.fulfilled]: (state, action) => {
      state.books = state.books.concat(action.payload);
    }
  }

})

export default bookSlice.reducer;