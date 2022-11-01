import {createSlice} from '@reduxjs/toolkit';

export const counterSlice=createSlice({
name:'counter',
initalstate:{
    counter:0
},
reducers:{

increment :(state,action)=>{
state.counter +=1
},
reset:(state,action)=>{
    state.counter =0
},
decrement:(state,action)=>{
    state.counter -=1
},
}})


export const {increment,reset,decrement} = counterSlice.actions

export default counterSlice.reducer





