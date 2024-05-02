import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { base_url } from './config';
import axios from 'axios';

export const parlourregistraion = createAsyncThunk('parlour/parlourregistraion',
  async (body, { rejectWithValue }) => {
    try {
          
   

      const response = await axios.post('http://3.109.102.154/radianceapi/public/index.php/api/details', body);

      console.log(response.data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const parlourlogin = createAsyncThunk('parlour/parlourlogin',
  async (body, { rejectWithValue }) => {
    try {
          
  
      const response = await axios.post('http://3.109.102.154/radianceapi/public/index.php/api/parlourlogin', body);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const Parlourslist = createAsyncThunk('parlour/Parlourslist', async () => {
  try {

    const response = await fetch('http://3.109.102.154/radianceapi/public/index.php/api/details');
    const data = await response.json();
    console.log(data);
    return data; // This will be the payload of the action when fulfilled
  } catch (error) {
    throw Error('Failed to fetch parlour details');
  }
});

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    status: "",
    error: null,
    parlourslist:[],
    parlourdetail:"",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(Parlourslist.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(Parlourslist.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.parlourslist = action.payload;
    })
    .addCase(parlourlogin.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.parlourdetail = action.payload;
    })
    .addCase(Parlourslist.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
      .addCase(parlourregistraion.fulfilled, (state, action) => {
        state.status = "success";
      });
  },
});

export const selectParlourDetails = (state) => state.parlourdetail.parlourDetails;

export default loginSlice.reducer;
