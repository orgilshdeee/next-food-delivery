import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "@mui/system";
import { Button } from "@mui/material";

interface test {
  id: string;
  name: string;
  color: string;
}

export default function BasicTable() {
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/category")
      .then((res) => setCategories(res.data.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);
  function addEventHandler(props: any) {
    const temp: any = {};
  }
  function deleteEventHandler(props: any) {
    const temp: any = {
      id: props,
    };
    console.log(temp);
    axios
      .delete("http://localhost:3001/category/delete", { data: temp })
      .then((res) => console.log(res))
      .catch((err) => {
        console.error(err);
      });
  }
  function updateEventHandler(props: any) {
    const temp: any = {};
  }
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Color</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((row: any) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                  <Button
                    id="deleteButton"
                    onClick={() => deleteEventHandler(row.id)}
                  >
                    delete
                  </Button>
                  <Button id="updateButton">update</Button>
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.color}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button href="./addCategory">Add</Button>
    </Container>
  );
}
