import Menu from "../../components/drawer";
import VerticalLinearStepper from "../../components/assistent";
import * as Styles from "./styles";
import { Typography, Stack, TextField, Button } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import React, { useState, useContext } from "react";
import DataGridDemo from "../../components/datagrid";
import { PayContext } from "../../provider/pagamento";

export default function Consultar() {
  const [data, setData] = useState([]);
  const [inicio, setInicio] = useState(new Date().toLocaleDateString());
  const [final, setFinal] = useState(new Date().toLocaleDateString());
  const [nome, setNome] = useState("Ana");
  const [cliente, setCliente] = useState("");

  const onChanceInicio = (newValue) => {
    setInicio(newValue);
  };

  const onChanceFinal = (newValue) => {
    setFinal(newValue);
  };
  const getData = async () => {
    const response = await fetch("/api/users");
    const values = await response.json();
    console.log(values);
    setData(values);
  };

  // const [open, setOpen] = useState(false);
  const { open } = useContext(PayContext);
  return (
    <Menu>
      <Styles.Container>
        <Styles.Container1>
          <Typography variant="h4" gutterBottom component="div">
            Consultar
          </Typography>
          <Styles.Form>
            <TextField
              id="outlined-basic"
              type="search"
              label="Cliente"
              placeholder="nome"
              variant="outlined"
              value={cliente}
              onChange={function (entrada) {
                const valor = entrada.target.value;
                setCliente(valor);
                console.log("cliente: ", cliente);
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  setNome(cliente);
                }
              }}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="Inicial"
                  inputFormat="MM/dd/yyyy"
                  value={inicio}
                  onChange={onChanceInicio}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="Final"
                  inputFormat="MM/dd/yyyy"
                  value={final}
                  onChange={onChanceFinal}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            <Button
              onClick={() => setNome(cliente)}
              size="medium"
              variant="contained"
            >
              Consultar
            </Button>
          </Styles.Form>

          {nome}
          <DataGridDemo />
        </Styles.Container1>
        <Styles.Progresso>
          {open && (
            <>
              <Typography variant="h4" gutterBottom component="div">
                Historico
              </Typography>
              <VerticalLinearStepper />
            </>
          )}
        </Styles.Progresso>
      </Styles.Container>

      {/* <button onClick={() => setOpen(true)}>open</button>

      {open && (
        <div>
          <Typography variant="h4" gutterBottom component="div">
            Luander
          </Typography> 

          <button onClick={() => setOpen(false)}>
            exit
          </button>
        </div>
      )} */}
    </Menu>
  );
}
