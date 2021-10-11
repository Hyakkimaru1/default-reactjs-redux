import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { connectRouter, routerMiddleware } from "connected-react-router";
import todoReducer from "features/todo/todoSlice";
import { history } from "../utils";

const rootReducer = combineReducers({
  router: connectRouter(history),
  todo: todoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware(history)),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
