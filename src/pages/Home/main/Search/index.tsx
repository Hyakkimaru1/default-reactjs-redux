import * as React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";

const Search = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      <TextField id="input-with-sx" label="Search to do" variant="standard" />
    </Box>
  );
};

export default Search;
