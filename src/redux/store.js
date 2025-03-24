import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/Tasks/taskSlice";
import userReducer from "./features/users/userSlice";

export const store = configureStore({
    reducer: {
        // tasks: tasksReducer,
        tasks:tasksReducer,
        users:userReducer,
    },
})