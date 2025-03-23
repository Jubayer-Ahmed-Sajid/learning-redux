"use client";
import React from "react";
import { useSelector } from "react-redux";
import TaskCard from "./TaskCard";
import { useDispatch } from "react-redux";
import { removeTask } from "@/redux/features/Tasks/taskSlice";

const Tasks = () => {
  const { tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  console.log(tasks);

  const categories = {
    upcoming: {
      title: "Upcoming",
      color: "blue",
    },
    ongoing: {
      title: "Ongoing",
      color: "yellow",
    },
    completed: {
      title: "Completed",
      color: "green",
    },
  };

  const getStatusColor = (status) => {
    const colors = {
      upcoming: "bg-blue-100 text-blue-700",
      ongoing: "bg-yellow-100 text-yellow-700",
      completed: "bg-green-100 text-green-700",
    };
    return colors[status] || colors.upcoming;
  };
const onRemove = (id) => {
    dispatch(removeTask(id));
    console.log("Remove task",id,tasks);

    
  };
  const onStatusChange =(id,status)=>{
    console.log("Status change",id,status);
  }
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {Object.keys(categories).map((status) => (
        <div
          key={status}
          className={`${getStatusColor(status)} rounded-lg shadow-md p-4`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">{categories[status].title}</h2>
            <span
              className={`bg-${categories[status].color}-500 text-white text-sm font-medium px-2 py-1 rounded-full`}
            ></span>
          </div>
          <div>
            {tasks.map((task) => {
              if (task.status === status) {
                return <TaskCard task={task} key={task.id} onRemove={onRemove} onStatusChange={onStatusChange}></TaskCard>;
              }
            })}
            {/* <TaskCard></TaskCard> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
