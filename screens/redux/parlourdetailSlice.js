import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { base_url } from './config';
import axios from 'axios';

export const parlourregistraion = createAsyncThunk('parlour/parlourregistraion',
  async (body, { rejectWithValue }) => {
    try {
          
   

      const response = await axios.post('http://13.235.8.172/radianceapi/public/index.php/api/details', body);

  
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const parlourreviews=createAsyncThunk('parlour/userreviews',
async (body, { rejectWithValue }) => {
  try {
        
 

    const response = await axios.post('http://13.235.8.172/radianceapi/public/index.php/api/userreviews', body);


  } catch (error) {
    return rejectWithValue(error.message);
  }
}
);
export const parlourlogin = createAsyncThunk('parlour/parlourlogin',
  async (body, { rejectWithValue }) => {
    try {
          
  
      const response = await axios.post('http://13.235.8.172/radianceapi/public/index.php/api/parlourlogin', body);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const parlourdetail = createAsyncThunk('parlour/parlourdetail',
  async (id) => {
    try {
      

      const response = await axios.get(`http://13.235.8.172/radianceapi/public/index.php/api/parlourdetail/${id}`);
      console.log(response.data.data);
      return response.data.data;
     
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const Parlourslist = createAsyncThunk('parlour/Parlourslist', async () => {
  try {
    const response = await axios.get(`http://13.235.8.172/radianceapi/public/index.php/api/parlourdetail`);
    
    return response.data;
    
    //return data; // This will be the payload of the action when fulfilled
  } catch (error) {
    throw Error('Failed to fetch parlour details');
  }
});

const parlourdetailSlice = createSlice({
  name: 'parlourdetail',
  initialState: {
    status: "",
    error: null,
    parlourslist:[],
    parlourdetails:"",
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
      state.parlourdetails = action.payload;
    })
    .addCase(parlourdetail.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.parlourdetails = action.payload;
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

export default parlourdetailSlice.reducer;
