import React from "react";
import { Container } from "@mui/material";
import AddTodo from "./main/AddTodo";
import ListTodo from "./main/ListTodo";
import Search from "./main/Search";

const Home = () => {
  return (
    <div style={{ marginTop: 10, textAlign: "center" }}>
      <Container fixed>
        <div style={{ display: "inline-block" }}>
          <Search />
          <AddTodo />
          <ListTodo />
        </div>
      </Container>
    </div>
  );
};

export default Home;
