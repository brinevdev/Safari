import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
    'shop/fetchProducts',
    async function(_, {rejectWithValue}) {
       try{
        const response = await fetch('./products.json');
        if (!response.ok) {
            throw new Error('Server error');
        }
        const data = await response.json();
       
        return data;
       }catch(err){
        return rejectWithValue(err.message);
       }
    }
);


const shopSlice = createSlice({
    name: 'shop',
    initialState: {
        data:{},
        status: null,
    },
    reducers: {

    },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchProducts.fulfilled]: (state,action) => {
            state.data = action.payload;
            state.status = 'ok'
        },
        [fetchProducts.rejected]: (state,action) => {
            state.status = action.payload || 'error';
        }
    }
})


export default shopSlice.reducer;