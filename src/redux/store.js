import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/Tasks/taskSlice";

export const store = configureStore({
    reducer: {
        // tasks: tasksReducer,
        tasks:tasksReducer
    },
})