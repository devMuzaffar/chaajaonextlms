import { useState } from "react";
import ModalWrap from "./ModalWrap";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import uiStyle from "@/app/styles/uiStyle";
import { IconButton } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Avatar,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "./Button";

const formStyle = createTheme(uiStyle);

const AddUser = ({ open, setOpen }) => {
  const [program, setProgram] = useState("");
  const [status, setStatus] = useState("");

  // Handle Program
  const handleChangeProgram = (event) => {
    setProgram(event.target.value);
  };

  // Handle Status
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  return (
    <ModalWrap open={open} setOpen={setOpen}>
      <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-white flex flex-col overflow-y-scroll h-full w-full md:h-auto md:w-auto">
        <div className="flex flex-col gap-4 p-8">
          {/* Title Header */}
          <div className="flex justify-between">
            <h2 className="text-xl text-gray-800 font-medium">Add New User</h2>
            <div className="md:hidden" onClick={() => setOpen(false)}>
              <IconButton>
                <IoMdClose size="24" />
              </IconButton>
            </div>
          </div>

          {/* Form fields */}
          <ThemeProvider theme={formStyle}>
            <div className="w-full flex gap-4 flex-col">
              {/* Basic Info */}
              <div className="grid grid-cols-2 gap-4">
                {/* First Name & Last Name */}
                <TextField
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  // value={options[key]}
                  // onChange={onChangeOptions}
                />
                <TextField fullWidth label="Last Name" variant="outlined" />
              </div>

              {/* Email */}
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
              />

              {/* Phone Number & Enrollment Date */}
              <div className="flex gap-4">
                <TextField
                  fullWidth
                  label="Phone Number"
                  variant="outlined"
                  type="number"
                />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Enrollment Date" sx={{ width: "100%" }} />
                </LocalizationProvider>
              </div>

              {/* Program & Status Select */}
              <div className="grid gap-4 md:grid-cols-2">
                <FormControl>
                  <InputLabel id="select-program">Program</InputLabel>
                  <Select
                    fullWidth
                    id="select-program"
                    value={program}
                    label="Program"
                    onChange={handleChangeProgram}
                  >
                    <MenuItem value="MDCAT">MDCAT</MenuItem>
                    <MenuItem value="ECAT">ECAT</MenuItem>
                    <MenuItem value="Intermediate">Intermediate</MenuItem>
                    <MenuItem value="Matriculation">Matriculation</MenuItem>
                  </Select>
                </FormControl>

                <FormControl>
                  <InputLabel id="select-status">Status</InputLabel>
                  <Select
                    fullWidth
                    id="select-status"
                    value={status === undefined ? "pending" : status}
                    label="Status"
                    onChange={handleChangeStatus}
                  >
                    <MenuItem value="Verified">Verified</MenuItem>
                    <MenuItem value="Rejected">Rejected</MenuItem>
                    <MenuItem value="Pending">Pending</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="w-full">
                <Button className="w-full">Submit</Button>
              </div>
            </div>
          </ThemeProvider>
        </div>
      </div>
    </ModalWrap>
  );
};

export default AddUser;

// TODO: Fix Add User Modal
