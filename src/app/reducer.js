import { createSlice } from "@reduxjs/toolkit";

export const rootReducer = createSlice({
    name:'rootReducer',
    initialState:[],
    reducers:{
        add:(state,action)=>{
         
            return [...state,action.payload];
        },
        deleted:(state,action)=>{
            const statedata =[...state];
            statedata.splice(action.payload.index,1);
            return statedata;
        }
    }
})

export const {add, deleted } = rootReducer.actions;
export default rootReducer.reducer;