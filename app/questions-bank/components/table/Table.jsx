"use client";
import { DataGrid } from "@mui/x-data-grid";
import columnsConfig from "./utils/columns";
import tableData from "./utils/tableData";

const paginationModel = { page: 0, pageSize: 5 };

const redBorder = "1px solid #a11215";
const color = "#a11215";

const primaryColor = "#1976d2";

// Main Component
const Table = () => {
  return (
    <DataGrid
      rows={tableData}
      columns={columnsConfig}
      initialState={{ pagination: { paginationModel } }}
      pageSizeOptions={[5, 10]}
      sx={{
        "& .MuiDataGrid-cell:focus": {
          outline: redBorder,
        },
        "& .MuiDataGrid-columnHeader:focus": {
            outline: redBorder
        },
        "& .MuiDataGrid-columnHeader--siblingFocused .MuiDataGrid-columnSeparator--resizable": {
            color: color,
        },

        "& .MuiDataGrid-columnSeparator--resizing":{
            color: color,
        },

      }}
    />
  );
};

export default Table;
