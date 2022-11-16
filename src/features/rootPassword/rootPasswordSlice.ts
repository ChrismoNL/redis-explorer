import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface RootPasswordState {
  value: string;
  hasRootPassword: boolean;
  isInitialized?: boolean;
}

const initialState: RootPasswordState = {
  value: "",
  hasRootPassword: false,
  isInitialized: undefined,
};

export const rootPasswordSlice = createSlice({
  name: "rootPassword",
  initialState,
  reducers: {
    initializeRoot: (state) => {
      if (!state.hasRootPassword) {
        const savedRootPassword = sessionStorage.getItem("rootPassword") || "";
        state.value = savedRootPassword;
        state.hasRootPassword = savedRootPassword.length > 0;
      }

      if (state.isInitialized === undefined) {
        const savedInitilizedOn = localStorage.getItem("InitializedOn") || "";
        state.isInitialized = savedInitilizedOn !== "";
      }
    },
    setRootPassword: (state, action: PayloadAction<string>) => {
      if (action.payload === "") {
        throw new Error("Root password cannot be empty");
      } else {
        sessionStorage.setItem("rootPassword", action.payload);
        localStorage.setItem("InitializedOn", new Date().toISOString());
        state.value = action.payload;
        state.hasRootPassword = true;
        state.isInitialized = true;
      }
    },
    deleteData: (state) => {
      sessionStorage.removeItem("rootPassword");
      localStorage.removeItem("InitializedOn");
      state = initialState;
    },
  },
});

export const { setRootPassword, initializeRoot } = rootPasswordSlice.actions;

export default rootPasswordSlice.reducer;
