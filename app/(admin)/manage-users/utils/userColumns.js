import ActionsCell from "../components/TableCells/ActionsCell";
import StatusCell from "../components/TableCells/StatusCell";
import UserCard from "../components/TableCells/UserCard";

// styling props
// For simplifying styling
const styleProps = ({ flex, minWidth, type, sortable } = {}) => {
  return {
    flex: flex || 1,
    minWidth: minWidth || 100,
    sortable: sortable ? true : false,
    type: type || "string",
  };
};



// 
// User Columns Config
// 
const userColumnsConfig = [
  // ID
  {
    field: "id",
    headerName: "#",
    ...styleProps({ flex: 0.5, minWidth: 50 }),
  },

  // User Name
  {
    field: "username",
    headerName: "User Name",
    ...styleProps({ flex: 1.5, sortable: true }),
    renderCell: ({value: {img, name, email}}) => <UserCard img={img} name={name} email={email}/>,
    valueGetter: (value, rows) => {
        return rows.username;
    },
  },

  // Contact
  {
    field: "contact",
    headerName: "Contact",
    ...styleProps({ flex: 1 }),
  },

  // Program
  {
    field: "program",
    headerName: "Program",
    ...styleProps({sortable: true}),
  },

  // Enrollment Date
  {
    field: "date",
    headerName: "Enrollment Date",
    ...styleProps({sortable: true}),
    // valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },

  // Status
  {
    field: "status",
    headerName: "Status",
    ...styleProps({sortable: true}),
    renderCell: (params) => <StatusCell status={params.value}/>
  },

  // Actions
  {
    field: "actions",
    headerName: "Actions",
    ...styleProps(),
    renderCell: () => <ActionsCell />,
  },
];

export default userColumnsConfig;
