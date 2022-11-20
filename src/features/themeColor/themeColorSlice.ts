import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import themes from "devextreme/ui/themes";

interface ThemeColorState {
  useDarkTheme: boolean;
}

const initialState: ThemeColorState = {
  useDarkTheme: false,
};

export const themeColorSlice = createSlice({
  name: "themeColor",
  initialState,
  reducers: {
    initializeColor: (state) => {
      const savedColor = localStorage.getItem("useDarkTheme") || "";
      if (savedColor === "true") {
        state.useDarkTheme = true;
      } else if (savedColor === "false") {
        state.useDarkTheme = false;
      } else {
        state.useDarkTheme =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        localStorage.setItem("useDarkTheme", state.useDarkTheme.toString());
      }
      themes.current(state.useDarkTheme ? "generic.dark" : "generic.light");
    },
    setThemeColor: (state, action: PayloadAction<boolean>) => {
      state.useDarkTheme = action.payload;
      localStorage.setItem("useDarkTheme", state.useDarkTheme.toString());
      themes.current(state.useDarkTheme ? "generic.dark" : "generic.light");
    },
  },
});

export const { initializeColor, setThemeColor } = themeColorSlice.actions;

export default themeColorSlice.reducer;
