"use client";
import { IconButton } from "@mui/material";
import TextField from "../../bodyintro/components/TextField";
import { MdOutlineClose } from "react-icons/md";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import statusIcons from "../list/statusIcons";
import { useState } from "react";

const ProfileStatus = ({ closeOnClick }) => {
  const [selectedStatus, setSelectedStatus] = useState("online");
  const handleStatusChange = (e) => setSelectedStatus(e.target.value);

  return (
    <div className="w-full h-full overflow-y-hidden flex flex-col">
      {/* Profile Header */}
      <div className="bg-primary h-60 p-2 flex flex-col">
        {/* User Info Row */}
        <div className="text-white flex items-center justify-between">
          <p className="">User Info</p>
          <IconButton className="!p-2" onClick={closeOnClick}>
            <MdOutlineClose className="text-2xl text-white" />
          </IconButton>
        </div>

        {/* Profile Block */}
        <div className="flex flex-col items-center justify-center gap-5 h-full">
          <img
            className="w-24 rounded-full"
            src="./assets/study-group/profile.jpg"
            alt=""
          />
          <h3 className="text-white text-xl font-medium">John Doe</h3>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-5 px-4 pt-8 pb-4 overflow-y-auto">
        {/* Text Field */}
        <TextField
          label={"Mood"}
          defaultValue={"its a status... not your diary..."}
        />

        {/* Status Selection List */}
        <div>
          <p className="text-xs font-medium">Status</p>

          <div>
            <FormControl
              classes={{
                root: "!text-xs text-gray-500",
              }}
            >
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={selectedStatus}
                onChange={handleStatusChange}
                name="radio-buttons-group"
              >
                {["online", "away", "donotdisturb", "offline"].map(
                  (value, index) => (
                    <FormControlLabel
                      key={index}
                      value={value}
                      control={
                        <Radio
                          sx={{
                            color: "#111827",
                            "&.Mui-checked": {
                              color: "#111827",
                            },
                          }}
                        />
                      }
                      label={statusIcons[index]}
                    />
                  )
                )}
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStatus;
