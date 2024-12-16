const columnsConfig = [
  // ID
  { field: "id", headerName: "#", sortable: false, flex: 0.2 },

  // Subject
  {
    field: "subject",
    headerName: "Subject",
    type: "number",
    flex: 1,
  },

  // Question Data
  {
    field: "questionData",
    sortable: false,
    headerName: "Question Data",
    flex: 1,
  },

  // Options
  { field: "options", headerName: "Options", sortable: false, flex: 1 },

  // Chapter
  {
    field: "chapter",
    headerName: "Chapter",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
    flex: 1,
  },

  // Topic
  {
    field: "topic",
    headerName: "Topic",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
    flex: 1,
  },
];

export default columnsConfig;
