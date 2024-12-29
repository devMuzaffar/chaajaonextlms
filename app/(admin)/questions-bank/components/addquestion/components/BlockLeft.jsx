import subjectList from "../../../list/subjectList";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const BlockLeft = ({
  subject,
  onChangeSubject,
  question,
  onChangeQuestion,
  options,
  onChangeOptions,
}) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Subject Name */}
      <FormControl>
        <InputLabel id="demo-simple-select-label">Subject</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subject}
          label="Subject"
          onChange={onChangeSubject}
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
        value={question}
        onChange={onChangeQuestion}
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
            onChange={onChangeOptions}
          />
        ))}
      </div>
    </div>
  );
};

export default BlockLeft;
