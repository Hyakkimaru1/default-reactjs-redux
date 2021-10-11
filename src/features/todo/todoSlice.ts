import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListResponse, Todo } from "models";

export interface TodoState {
  loading: boolean;
  list: Todo[];
}

const initialState: TodoState = {
  loading: false,
  list: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    fetchCityList(state) {
      state.loading = true;
    },
    fetchCityListSuccess(state, action: PayloadAction<ListResponse<Todo>>) {
      state.loading = false;
      state.list = action.payload.data;
    },
    fetchCityListFailed(state) {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchCityList, fetchCityListSuccess, fetchCityListFailed } = todoSlice.actions;

const todoReducer = todoSlice.reducer;
export default todoReducer;
