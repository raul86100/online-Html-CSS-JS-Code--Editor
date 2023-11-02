import { createSlice } from "@reduxjs/toolkit";
//import { initializeConnect } from "react-redux/es/components/connect";


export const htmlSlice=createSlice({
    name: 'html',
  initialState:{value: "<!--No need to write the structure-->" },
  reducers: {
    addhtmlcode: (state, action) => {
      state.value = action.payload;
    },
    clear:(state)=>{
      state.value="<!--No need to write the structure-->";
    }
  },
});
export const cssSlice=createSlice({
  name:'css',
  initialState:{value: "/* style your website */" },
  reducers:{
    addcsscode:(state,action)=>{
      state.value=action.payload;
    },
    clear:(state)=>{
      state.value="/* style your website */";
    }
  }
})
export const jsSlice=createSlice({
  name:'js',
  initialState:{value: "{/* add javascript functions */}" },
  reducers:{
    addjscode:(state,action)=>{
      state.value=action.payload;
    },
    clear:(state)=>{
      state.value="{/* add javascript functions */} ";
    }
  }
})

// export const {addhtmlcode}=htmlSlice.actions;
// export const {addcsscode}=cssSlice.actions;

// export const cssslice=cssSlice.reducer;
// export default htmlSlice.reducer;

export const { actions: htmlActions, reducer: htmlReducer } = htmlSlice;
export const { actions: cssActions, reducer: cssReducer } = cssSlice;
export const {actions :jsActions,reducer:jsReducer}=jsSlice;