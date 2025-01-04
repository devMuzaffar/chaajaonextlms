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
    ...styleProps({ flex: 0.4, minWidth: 50 }),
  },

  // User Name
  {
    field: "name",
    headerName: "User Name",
    ...styleProps({ flex: 1, sortable: true }),
  },

    // email
    {
      field: "email",
      headerName: "Email",
      ...styleProps({ flex: 1.3, sortable: true }),
      valueGetter: (value) => (value.charAt(0).toUpperCase() + value.slice(1))
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
    ...styleProps({flex: 0.8,sortable: true}),
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
