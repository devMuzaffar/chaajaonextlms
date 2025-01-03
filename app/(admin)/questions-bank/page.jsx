"use client";
import { useState } from "react";
import AddQuestion from "./components/addquestion/AddQuestion";
import Button from "./components/button/Button";
import StatsCard from "./components/statscard/StatsCard";
import Table from "./components/table/Table";
import subjectList from "./list/subjectList";

const QuestionsBank = () => {
  // Add Question Modal State
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  return (
    <div className="flex flex-col px-2 gap-10 py-8">
      {/* Status List */}
      <div>
        {/* Title */}
        <h2 className="font-semibold text-2xl px-2 pb-6">Total Questions</h2>
        {/* List */}
        <div className="grid sm:grid-cols-2 md:grid-cols-auto-100 gap-4">
          {subjectList.map((subject, index) => (
            <StatsCard key={index} subject={subject} numbers={80} />
          ))}
        </div>
      </div>

      {/* Buttons List */}
      <div className="grid items-center gap-4 sm:grid-cols-3 md:flex md:justify-end">
        <Button onClick={openModal}>Add Question</Button>
      </div>

      {/* Add Questions Modal */}
      <AddQuestion open={isOpen} setOpen={setIsOpen} />

      {/* Table */}
      <div className="w-full h-full bg-white">
        <Table />
      </div>
    </div>
  );
};

export default QuestionsBank;
