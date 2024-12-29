import { useState } from "react";
import ModalWrap from "./components/ModalWrap";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import uiStyle from "@/app/styles/uiStyle";
import BlockRight from "./components/BlockRight";
import BlockLeft from "./components/BlockLeft";
import Header from "./components/Header";

const formStyle = createTheme(uiStyle);

const AddQuestion = ({ open, setOpen }) => {
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
          <Header setOpen={setOpen}/>

          {/* Form field */}
          <ThemeProvider theme={formStyle}>
            <div className="w-full grid gap-6 sm:grid-cols-2">
              {/* Block Left */}
              <BlockLeft
                subject={subject}
                onChangeSubject={handleChange}
                question={question}
                onChangeQuestion={handleChangeQuestion}
                options={options}
                onChangeOptions={handleChangeOptions}
              />

              {/* Block Right */}
              <BlockRight />
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
