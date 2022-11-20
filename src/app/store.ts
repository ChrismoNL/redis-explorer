import { configureStore } from "@reduxjs/toolkit";

import rootPasswordReducer from "../features/rootPassword/rootPasswordSlice";
import themeColorReducer from "../features/themeColor/themeColorSlice";

export const store = configureStore({
  reducer: {
    rootPassword: rootPasswordReducer,
    themeColor: themeColorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
