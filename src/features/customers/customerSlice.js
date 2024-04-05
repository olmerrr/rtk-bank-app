import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: ""
}
const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare: (fullName, nationalID) => {
        return {
          payload: {
            fullName,
            nationalID,
            createdAt: new Date().toISOString()
          }
        }
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName
        state.nationalID = action.payload.nationalID
        state.createdAt = action.payload.createdAt
      }
    },
    updateName(state, action) {
      state.fullname = action.payload
    },
  }
});
export const {
  createCustomer,
  updateName
} = customerSlice.actions;

export default customerSlice.reducer;

// old redux way
// export default function customerReducer(state = initialState, action) {
//   switch ( action.type ) {
//     case "customers/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createdAt: action.payload.createdAt
//       }
//     case "customers/updateName":
//       return {
//         ...state,
//         fullName: action.payload.fullName
//       }
//     default : return state;
//   }
// }
//
// // actions creators
// export function createCustomer(fullName, nationalID) {
//   return {type: "customers/createCustomer", payload:
//       {
//         fullName,
//         nationalID,
//         createdAt: new Date().toISOString()
//       }}
// }
//
// export function updateName(fullName) {
//   return {type: "customers/updateName", payload: fullName }
// }
// old redux way
