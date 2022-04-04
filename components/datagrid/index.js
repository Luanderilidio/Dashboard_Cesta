import React, {useContext} from "react";
import {
  DataGrid,
  GridToolbar,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { Chip, Typography, Pagination, IconButton } from "@mui/material";
import {FiEye} from 'react-icons/fi'
import { PayContext } from "../../provider/pagamento";


const columns = [
  { field: "id", headerName: "ID", width: 15 },
  {
    field: "name",
    headerName: "Nome",
    width: 180,
  },
  {
    field: "telefone",
    headerName: "Telefone",
    width: 120,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    type: "number",
    renderCell: (params) => {
      if (params.value === 0) {
        return <Chip color="success" label="PAGO" />;
      } else {
        return <Chip color="error" label="PENDENTE" />;
      }
    },
  },
  {
    field: "vencimento",
    headerName: "Vencimento",
    width: 110,
  },
  {
    field: "total",
    headerName: "Total",
    width: 90,
    renderCell: (params) => {
      return (
        <Typography sx={{ color: "red" }} variant="subtitle2" component="div">
          {params.value}
        </Typography>
      );
    },
  },
  {
    field: "endereco",
    headerName: "Endereço",
    width: 180,
  },
  {
    field: "historico",
    headerName: "Historico",
    width: 85,
    renderCell: () => {
      const {open, setOpen} = useContext(PayContext)
      return (
        <IconButton
          onClick={() =>{
            setOpen(!open)
          }}
          aria-label="upload picture"
          component="span"
        >
          <FiEye color={"#000000"} />
        </IconButton>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    name: "Luander ilidio de Arruda",
    endereco: "Av. Tranquedo Neves",
    telefone: 65996635843,
    status: 0,
    vencimento: "11/02/2022",
    total: "R$ 380,00",
  },
  {
    id: 2,
    name: "Snow",
    endereco: "Av. Tranquedo Neves",
    telefone: 65996635843,
    status: 1,
    vencimento: "11/02/2022",
    total: "R$ 380,00",
  },
  {
    id: 3,
    name: "Snow",
    endereco: "Av. Tranquedo Neves",
    telefone: 65996635843,
    status: 1,
    vencimento: "11/02/2022",
    total: "R$ 380,00",
  },
];

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Pagination
      color="primary"
      count={pageCount}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

export default function DataGridDemo() {
  return (
    <div style={{ marginTop: "1rem", height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        components={{
          Toolbar: GridToolbar,
          Pagination: CustomPagination,
        }}
      />
    </div>
  );
}
