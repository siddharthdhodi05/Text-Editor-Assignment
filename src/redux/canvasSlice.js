import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  textItems: [],
  undoStack: [],
  redoStack: []
}

const canvasSlice =  createSlice({
  name:"canvas",
  initialState,
  reducers:{
    setTextItems: (state,action)=>{
      const newTextItems = [...state.textItems, action.payload];
      state.textItems = newTextItems;
      state.undoStack.push(newTextItems);
      state.redoStack = []
    }
  }
})