import React from 'react'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



const initialState={
name:"",
email:"",
password:""
}

const loginSlice=createSlice({
  initialState,
  reducers:{
    login:(state,action)=>{

    }
  }

})

 const {login}=loginSlice.actions
export default loginSlice.reducer