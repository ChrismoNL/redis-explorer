import { configureStore } from "@reduxjs/toolkit";

import rootPasswordReducer from "../features/rootPassword/rootPasswordSlice";

export const store = configureStore({
  reducer: {
    rootPassword: rootPasswordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
