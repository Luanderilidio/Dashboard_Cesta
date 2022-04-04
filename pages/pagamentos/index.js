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

export default function Pagamentos() {
  const [lista, setLista] = useState([]);
  const [value, setValue] = useState(new Date().toLocaleDateString());
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [cliente, setCliente] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const addItem = () => {
    setLista([cliente].concat(lista));
    setCliente("");
  };

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
            Pagamentos
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
                const nome = entrada.target.value;
                setCliente(nome);
                console.log("cliente: ", cliente);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Valor"
              placeholder="R$"
              variant="outlined"
              value={valor}
              onChange={function (entrada) {
                const quantidade = entrada.target.value;
                setValor(quantidade);
                console.log("cliente: ", cliente);
              }}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="Próximo Pagamento"
                  inputFormat="MM/dd/yyyy"
                  value={value}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            <Button onClick={addItem} size="medium" variant="contained">
              Lançar
            </Button>
          </Styles.Form>

          {cliente && <Typography>{cliente}</Typography>}
          {valor && <Typography>{valor}</Typography>}
          {/* {value && <Typography>{value}</Typography>} */}

          {/* <ul>
            {lista.map((item) => {
              <li>{'luander'}</li>
            })}
          </ul> */}

          {lista.map((item) => {
            return <p>{item}</p>;
          })}
          <DataGridDemo />
        </Styles.Container1>
        {/* <Styles.Progresso>{open && <VerticalLinearStepper />}</Styles.Progresso> */}
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
