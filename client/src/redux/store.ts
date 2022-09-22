import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dataReducer from "./data/dataSlice";

const rootReducer = combineReducers({})

export const store = configureStore({
  reducer: {
    dataa: dataReducer.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof rootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
