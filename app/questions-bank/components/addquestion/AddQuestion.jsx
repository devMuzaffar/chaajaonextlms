import { useState } from "react";
import ModalWrap from "./ModalWrap";
import { TextField } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import subjectList from "../../list/subjectList";
import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { Button } from "@mui/material/index";
import { IconButton } from "@mui/material/index";
import { IoMdClose } from "react-icons/io";
import uiStyle from "@/app/styles/uiStyle";

const formStyle = createTheme(uiStyle);

const AddQuestion = ({ open, setOpen }) => {
  const [subject, setSubject] = useState("");
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
              {/* Block L */}
              <div className="flex flex-col gap-4">
                {/* Subject Name */}
                <FormControl>
                  <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={subject}
                    label="Subject"
                    onChange={handleChange}
                  >
                    {subjectList.map((subject, index) => (
                      <MenuItem key={index} value={subject}>
                        {subject}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {/* Question Data */}
                <TextField
                  label="Your Question"
                  variant="outlined"
                  minRows={3}
                  multiline
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
                      onChange={handleChangeOptions}
                    />
                  ))}
                </div>
              </div>

              {/* Block R */}
              <div className="flex flex-col gap-4 justify-between">
                {/* Chapter Name */}
                <TextField label="Chapter Name" variant="outlined" />

                {/* Topic Name */}
                <TextField label="Topic Name" variant="outlined" />

                {/* Correct Answer */}
                <FormControl sx={{ margin: "0 auto" }}>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Correct Answer
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="A"
                    name="radio-buttons-group"
                    row
                  >
                    <FormControlLabel value="A" control={<Radio />} label="A" />
                    <FormControlLabel value="B" control={<Radio />} label="B" />
                    <FormControlLabel value="C" control={<Radio />} label="C" />
                    <FormControlLabel value="D" control={<Radio />} label="D" />
                  </RadioGroup>
                </FormControl>

                {/* Submit Button */}
                <Button sx={{ borderRadius: "99999px" }} variant="contained">
                  Submit
                </Button>
              </div>
            </div>
          </ThemeProvider>
        </div>
      </div>
    </ModalWrap>
  );
};

export default AddQuestion;


// TODO: BREAK DOWN SEVERAL COMPONENTS FOR EASE
// TODO: ADD EACH FIELD STATE