import { registerUser } from "@/app/actions/auth/registerUser";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";


// initial state
const initialState = {
    name: "",
    email: "",
    password: "",
    isLoading: true,
    isError: false,
    error:'',
    isSuccess: false,
  };
  

// Async thunk function for creating new user
export const createUser = createAsyncThunk(
    "users/createUser",
    async (payload)=>{
        console.log('thunk is hitted', payload)
        const data = await registerUser(payload);
        console.log('data is ', data);
        return data;
    }
)



const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {

  },
  extraReducers:(builder)=>{
      builder.addCase(createUser.pending,(state)=>{
          state.isLoading = true;
          state.isError = false;
          state.isSuccess = false;
          state.name = "";
          state.email = "";
          state.password = "";
      }).addCase(createUser.fulfilled,(state,{payload})=>{
          state.isLoading = false;
          state.isError = false;
          state.isSuccess = true;
          state.name = payload.data.name;
          state.email = payload.data.email;
          state.password = payload.data.password;
      }).addCase(createUser.rejected,(state,action)=>{
          state.isLoading = false;
          state.isError = true;
          state.isSuccess = false;
          state.name = "";
          state.email = "";
          state.password = "";
          state.error = action.error.message
      })
  }
});

export default userSlice.reducer;
