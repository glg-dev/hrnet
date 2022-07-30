import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employeesList: []
  },
  reducers: {
    addInList: (state, {payload}) => {
      state.employeesList.push(payload)
    },
  }
})

export const { addInList } = employeeSlice.actions
export default employeeSlice.reducer