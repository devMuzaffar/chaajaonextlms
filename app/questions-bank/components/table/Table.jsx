"use client";
import { DataGrid } from "@mui/x-data-grid";
import columnsConfig from "./utils/columns";
import tableData from "./utils/tableData";
import tableStyle from "@/app/styles/tableStyle";
import { ThemeProvider } from "@mui/material/styles";

const paginationModel = { page: 0, pageSize: 5 };

// Main Component
const Table = () => {
  return (
    <ThemeProvider theme={tableStyle}>
      <DataGrid
        rows={tableData}
        columns={columnsConfig}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
      />
    </ThemeProvider>
  );
};

export default Table;
