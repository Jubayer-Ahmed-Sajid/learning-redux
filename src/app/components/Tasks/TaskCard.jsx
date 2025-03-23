"use client";
import { removeTask, updateTask } from "@/redux/features/Tasks/taskSlice";
import React from "react";
import { HiOutlineTrash, HiOutlineCheck } from "react-icons/hi";
import { MdOutlineWatchLater } from "react-icons/md";
import { useDispatch } from "react-redux";

const TaskCard = ({task}) => {
    const dispatch = useDispatch();
   
  
  const getStatusButton = () => {
    if (task?.status === "completed") return null;

    return task?.status === "upcoming" ? (
      <button
        onClick={() => dispatch(updateTask(task.id))}
        className="text-yellow-500 hover:text-yellow-600 transition-colors p-1 rounded"
        title="Move to Ongoing"
      >
        <MdOutlineWatchLater 
         className="h-5 w-5" />
      </button>
    ) : (
      <button
        onClick={() => dispatch(updateTask(task.id))}
        className="text-green-500 hover:text-green-600 transition-colors p-1 rounded"
        title="Mark as Completed"
      >
        <HiOutlineCheck className="h-5 w-5" />
      </button>
    );
  };

  const onDelete = (id) => {
    
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-gray-800">{task?.title}</h3>
        <span className="text-xs text-gray-500">{task?.date}</span>
      </div>

      <p className="text-gray-600 text-sm my-2 line-clamp-2">
        {task?.description}
      </p>

      <div className="flex items-center text-xs text-gray-500 mt-2">
        <span className="flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          {task?.assignedTo}
        </span>
      </div>

      <div className="flex justify-end items-center gap-2 mt-3 pt-3 border-t">
        <button
          onClick={() => dispatch(removeTask(task?.id))}
          className="text-red-500 hover:text-red-600 transition-colors p-1 rounded"
          title="Delete Task"
        >
          <HiOutlineTrash className="h-5 w-5" />
        </button>
        {getStatusButton()}
      </div>
    </div>
  );
};

export default TaskCard;
