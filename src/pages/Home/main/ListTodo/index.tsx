import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const ListTodo = () => {
  return (
    <List sx={{ mt:2}}>
      <ListItem sx={{my:2,border: 2,borderColor:"primary.main"}}>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
      <ListItem sx={{my:2,border: 2,borderColor:"primary.main"}}>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem>
      <ListItem sx={{my:2,border: 2,borderColor:"primary.main"}}>
        <ListItemText primary="Vacation" secondary="July 20, 2014" />
      </ListItem>
    </List>
  );
};

export default ListTodo;
