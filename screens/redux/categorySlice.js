import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

// Async thunk for fetching data


export const fetchsericescategory = createAsyncThunk('parlour/fetchsericescategory',
  async () => {
    try {
          
   

      const response = await axios.get('http://3.109.102.154/radianceapi/public/index.php/api/servicetypes');

      return response.data;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchsericessubcategory = createAsyncThunk('parlour/fetchsericessubcategory',
  async (id) => {
    try {
   
      const response = await axios.get(`http://3.109.102.154/radianceapi/public/index.php/api/servicetypes/${id}`);
   
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);


// Create the API using createApi


const categorySlice = createSlice({
  name: 'category',
  initialState: { services: [],servicestypes: [],categorylist:[], isLoading: false, error: null },
  reducers: { },

  extraReducers: (builder) => {
    builder.addCase(fetchsericescategory.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchsericescategory.fulfilled, (state, action) => {
      state.servicestypes = action.payload.data;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchsericessubcategory.fulfilled, (state, action) => {
      state.services = action.payload;
      state.isLoading = false;
      state.error = null;
    });
   
  },
});

export const { setdepartmentcategory } = categorySlice.actions;
export default categorySlice.reducer;
