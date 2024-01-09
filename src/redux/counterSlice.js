import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    questionsIds: [],
    hidePopup: true
  }, reducers: {
    addQuestionId: (state, action) => {
      state.questionsIds.push(action.payload)
    },
    changeHidePopup: (state, action) => {
      state.hidePopup = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { addQuestionId, changeHidePopup } = counterSlice.actions

export default counterSlice.reducer
