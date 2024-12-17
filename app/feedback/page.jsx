"use client";
import { TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import textFieldStyle from "../styles/textFieldStyle";

const Feedback = () => {
  const MuiTextField = styled(TextField)(textFieldStyle);

  return (
    <div className="px-4 py-12 flex flex-col gap-10">
      {/* Title */}
      <div className="text-3xl font-bold">
        <h2>Feedback</h2>
      </div>

      {/* Form */}
      <div className="bg-white rounded-lg shadow-xl px-8 py-10 flex flex-col gap-4">
        {/* Name & Email */}
        <div className="flex flex-wrap sm:flex-nowrap justify-between gap-8">
          <MuiTextField
            required
            fullWidth
            label="Name"
            variant="standard"
            placeholder="Your Name Here"
          />
          <MuiTextField
            required
            fullWidth
            label="Email"
            variant="standard"
            placeholder="name@domain.com"
          />
        </div>

        {/* Message */}
        <div>
          <MuiTextField
            fullWidth
            label="Messages"
            placeholder="Type Here"
            multiline
            variant="standard"
            minRows={5}
          />
        </div>

        {/* Upload Image */}
        <div className="p-2 border-[1px] rounded-lg cursor-pointer">
          {/* Dotted Red Div */}
          <div className="border-[1px] rounded-lg border-primary border-dotted py-6">
            <div className="flex flex-col items-center justify-center gap-4">
              <img
                className="w-9"
                src="./assets/contact-us/upload.png"
                alt=""
              />
              <h2 className="font-bold text-center">
                Drop Your Image Or <span className="text-primary">Browse</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="self-center w-full md:w-2/5">
          <Button
            fullWidth
            className="!bg-primary !rounded-full !font-bold !py-2"
            variant="contained"
            disableElevation
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
