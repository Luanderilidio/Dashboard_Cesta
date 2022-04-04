import React, { useState, useEffect } from "react";
import Menu from "../../components/drawer";
import { TextField } from "@mui/material";

export default function Sobre() {
  const [valor, setValor] = useState(0);
  const [multiplicar, setMultiplicar] = useState(0);

  useEffect(() => {
    setMultiplicar(() => valor * 2);
  }, [valor]);
  return (
    <Menu>
      <p>Estudando o useState( )</p>
      <p>Quando a variavel VALOR mudar, vai ter uma função escutando ela.</p>
      <p>Vai dar um render na div e atualizar a variavel.</p>
      <p>Nesse caso, quando a variavel 'valor' mudar, a função vai multiplicar o valor * 2, e dps atualizar.</p>
      <TextField
        value={valor}
        onChange={(entrada) => {
          const x = entrada.target.value;
          setValor(x);
        }}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            setValor(valor);
          }
        }}
        id="outlined-basic"
        label="valor"
        variant="outlined"
      />
      <h1>{multiplicar}</h1>
    </Menu>
  );
}
