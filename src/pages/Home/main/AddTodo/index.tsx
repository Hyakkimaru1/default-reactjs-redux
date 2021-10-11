import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";

export default function AddTodo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [title, setTitle] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setTitle("");
    setValue("");
    setOpen(false);
  };

  return (
    <div style={{ marginTop: 10 }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add to do
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle id="alert-dialog-title">{"Add to do"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={title}
            onChange={handleChangeTitle}
          />
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            margin="dense"
            variant="standard"
            multiline
            fullWidth
            maxRows={4}
            value={value}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
