import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function addCategory() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error
          id="outlined-error-helper-text"
          label="Category Name"
          defaultValue="Enter Category Name"
        />
        <TextField
          error
          id="outlined-helper-text"
          label="Color"
          defaultValue="Enter Color"
        />
      </div>
      <Button variant="outlined">Add Category</Button>
    </Box>
  );
}
