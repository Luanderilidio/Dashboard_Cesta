import React, { useState, useContext } from "react";
import * as Styles from "./styles";
import Menu from "../../components/drawer";
import VerticalLinearStepper from "../../components/assistent";
import { PayContext } from "../../provider/pagamento";
import DataGridDemo from "../../components/datagrid";
import { Typography, Stack, TextField, Button } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Alert from "../../components/alert";

export default function Cadastros() {
  // const getData = async () => {
  //   const response = await fetch("/api/users");
  //   const values = await response.json();
  //   console.log(values);
  //   setData(values);
  // };

  // const { open } = useContext(PayContext);
  return (
    <Menu>
      <Styles.Container>
        <Styles.Container1>
          <Typography variant="h4" gutterBottom component="div">
            Cadastrar
          </Typography>
        </Styles.Container1>
      </Styles.Container>
    </Menu>
  );
}
