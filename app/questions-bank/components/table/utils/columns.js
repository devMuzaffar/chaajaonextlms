import ActionButtons from "../../button/ActionButtons";

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

const columnsConfig = [
  // ID
  {
    field: "id",
    headerName: "#",
    ...styleProps({ flex: 0.5, minWidth: 50, sortable: false }),
  },

  // Subject
  {
    field: "subject",
    headerName: "Subject",
    type: "number",
    ...styleProps({ sortable: true }),
  },

  // Question Data
  {
    field: "questionData",
    headerName: "Question Data",
    ...styleProps({ flex: 1 }),
  },

  // Options
  {
    field: "options",
    headerName: "Options",
    ...styleProps(),
  },

  // Chapter
  {
    field: "chapter",
    headerName: "Chapter",
    description: "Chapter of book",
    ...styleProps(),
    // valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },

  // Topic
  {
    field: "topic",
    headerName: "Topic",
    description: "Topic Number of Book",
    ...styleProps(),
    // valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },

  // Actions
  {
    field: "actions",
    headerName: "Actions",
    ...styleProps(),
    renderCell: () => <ActionButtons />,
  },
];

export default columnsConfig;
