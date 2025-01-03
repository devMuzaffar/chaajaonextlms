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
} from "@mui/material";

const formStyle = createTheme(uiStyle);

const AddUser = ({ open, setOpen }) => {
  const [subject, setSubject] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
  });
  const [correctAnswer, setCorrectAnswer] = useState("");

  // Handle Subject
  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  // Handle Subject
  const handleChangeQuestion = (event) => {
    setQuestion(event.target.value);
  };

  // Handle Options
  const handleChangeOptions = (event) => {
    const { name, value } = event.target;
    setOptions((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //   Handle Correct Answer
  const handleCorrectAnswer = (e) => {
    setCorrectAnswer(e.target.value);
  };

  return (
    <ModalWrap open={open} setOpen={setOpen}>
      <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 bg-white flex flex-col overflow-y-scroll h-full w-full md:h-auto md:w-auto">
        <div className="flex flex-col gap-4 p-8">
          {/* Title Header */}
          <div className="flex justify-between">
            <h2 className="text-xl text-gray-800 font-medium">
              Add Your Question
            </h2>
            <div className="md:hidden" onClick={() => setOpen(false)}>
              <IconButton>
                <IoMdClose size="24" />
              </IconButton>
            </div>
          </div>

          {/* Form field */}
          <ThemeProvider theme={formStyle}>
            <div className="w-full grid gap-6 sm:grid-cols-2">
              {/* Block Left */}
              <div className="flex flex-col gap-4">
                {/* Subject Name */}
                <FormControl>
                  <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={subject}
                    label="Subject"
                    // onChange={onChangeSubject}
                  >
                    <MenuItem value={0}>X</MenuItem>
                  </Select>
                </FormControl>

                {/* Question Data */}
                <TextField
                  label="Your Question"
                  variant="outlined"
                  minRows={3}
                  multiline
                  value={question}
                  //   onChange={onChangeQuestion}
                />

                {/* Options */}
                <div className="grid grid-cols-2 gap-4">
                  {Object.keys(options).map((key) => (
                    <TextField
                      fullWidth
                      key={key}
                      label={`Option ${key}`}
                      variant="outlined"
                      name={key}
                      value={options[key]}
                      //   onChange={onChangeOptions}
                    />
                  ))}
                </div>
              </div>

              {/* Block Right */}
              {/* <BlockRight /> */}
            </div>
          </ThemeProvider>
        </div>
      </div>
    </ModalWrap>
  );
};

export default AddUser;

// TODO: Fix Add User Modal