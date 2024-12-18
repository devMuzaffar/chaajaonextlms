import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

const BlockRight = () => {
  return (
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
      <Button sx={{ borderRadius: "99999px", color: "white" }} variant="contained" disableElevation>
        Submit
      </Button>
    </div>
  );
};

export default BlockRight;
