"use client";
import AddTaskForm from "@/components/AddTaskForm";
import AddTaskModal from "@/components/AddTaskModal";
import MyModal from "@/components/Modal";
import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

const AddTask = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 
            text-white rounded-md transition-colors duration-200 gap-2 text-sm font-medium
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <IoAddCircleOutline className="h-5 w-5" />
      Add Task
      <AddTaskModal isOpen={isOpen} title="Add Task" setIsOpen={setIsOpen}>
       
      </AddTaskModal>
    </button>
  );
};

export default AddTask;
