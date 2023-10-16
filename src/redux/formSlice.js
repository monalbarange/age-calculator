import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    day: '',
    month: '',
    year: '',
  },
  formError: {
    day: '',
    month: '',
    year: '',
    generic: '',
  },
  output: {
    day: '',
    month: '',
    year: '',
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData(state, action) {
      state.formData = action.payload;
    },
    setFormError(state, action) {
      state.formError = action.payload;
    },
    setOutput(state, action) {
      state.output = action.payload;
    },
  },
});

export const { setFormData, setFormError, setOutput } = formSlice.actions;
export const selectForm = (state) => state.form;
export default formSlice.reducer;