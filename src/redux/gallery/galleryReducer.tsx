import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const divArrMaker = (num: number) => {
  const result: string[] = [];
  for (let i = 1; i <= num; i += 1) {
    const tmp = 'https://picsum.photos/80';

    result.push(tmp);
  }
  return result;
};
// 여기서 만들어지는 testArr가 state가 되는거고..
const testArr = divArrMaker(10);

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: testArr,
  reducers: {
    addImg: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      const newImg = payload;
      return [...state, newImg];
    },
    deleteImg: (state) => {
      state.pop();
      return state;
    },
  },
});

const galleryReducer = gallerySlice.reducer;
const galleryActions = gallerySlice.actions;

export { galleryActions, galleryReducer };
