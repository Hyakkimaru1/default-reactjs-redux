import { ListResponse, Todo } from "models";
import axiosClient from "./axiosClient";

const todoApi = {
  getAll(): Promise<ListResponse<Todo>> {
    const url = "/todo";
    return axiosClient.get(url, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
  },
  searchTodo(): Promise<ListResponse<Todo>> {
    const url = "/todo";
    return axiosClient.get(url, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
  },
  addTodo(todo: Todo): Promise<ListResponse<Todo>> {
    const url = "/todo";
    return axiosClient.post(url, { todo });
  },
  removeTodo(id: number): Promise<ListResponse<Todo>> {
    const url = `/todo/${id}`;
    return axiosClient.delete(url);
  },
};

export default todoApi;
