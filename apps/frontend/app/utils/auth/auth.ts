import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserTypes, EmailTypes } from "../../types/UserTypes";

const initialState: UserTypes = {
  isAuth: false,
  name: "",
  emails: [],
};

const UserAuth = createSlice({
  name: "UserAuth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ name: string }>) {
      state.isAuth = true;
      state.name = action.payload.name;
    },
    logout(state) {
      state.isAuth = false;
      state.name = "";
      state.emails = [];
    },
    addEmail(state, action: PayloadAction<EmailTypes>) {
      state.emails.push(action.payload);
    },
  },
});

export const { login, logout, addEmail } = UserAuth.actions;
export default UserAuth.reducer;
