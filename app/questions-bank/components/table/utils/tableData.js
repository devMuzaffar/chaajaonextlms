import ActionButtons from "../../button/ActionButtons";

const generateDummyData = () => {
  const data = [];
  for(let i = 0; i < 20; i++){
    if(i < 10){
      data.push({
        id: i,
      questionData: "Question P " + i,
      options: "options",
      subject: "Physics",
      topic: "Topic Name " + i*2,
      chapter: "Chapter # " + i,
      });
    }else{
      data.push({
        id: i,
      questionData: "Question C" + i,
      options: "options",
      subject: "Chemistry",
      topic: "Topic Name",
      chapter: "Chapter #" + i,
      });
    }
  }
  return data;
}


const tableData = generateDummyData();

export default tableData;
