import { createSlice } from '@reduxjs/toolkit';

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: [],
  reducers: {},
});

const galleryReducer = gallerySlice.reducer;

export default galleryReducer;
