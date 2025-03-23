import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    tasks:[]
}
export const tasksSlice = createSlice({
    initialState,
    name:'tasks',
    reducers:{
        addTask:(state,{payload})=>{
            if(state.tasks.length===0){
            const  id=1;
              state.tasks.push({id,...payload});
            }else{
                const id=state.tasks.at(-1).id+1;
                state.tasks.push({id,...payload});
            }

        },
        // remove task
        removeTask:(state,{payload})=>{
            state.tasks.filter((task)=>task.id !== payload);
        },

        // update task
        updateTask:(state,{payload})=>{
            const target = state.tasks.find((task)=>task.id === payload);
          if(target.status === 'upcoming')  target.status = 'ongoing';
          else if(target.status === 'ongoing') target.status = 'completed';

        }

    }

})
export const {addTask,removeTask,updateTask} = tasksSlice.actions;
export default tasksSlice.reducer;