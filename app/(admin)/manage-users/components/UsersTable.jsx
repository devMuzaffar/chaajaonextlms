import { DataGrid } from "@mui/x-data-grid";
import userColumnsConfig from "../utils/userColumns";
import tableStyle from "@/app/styles/tableStyle";
import { ThemeProvider } from "@mui/material/styles";
import userList from "../utils/usersList";

const paginationModel = { page: 0, pageSize: 5 };

const UsersTable = () => {
  return (
    <ThemeProvider theme={tableStyle}>
      <DataGrid
        rows={userList}
        columns={userColumnsConfig}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
      />
    </ThemeProvider>
  );
};

export default UsersTable;
