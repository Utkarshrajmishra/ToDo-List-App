import {createSlice} from "@reduxjs/toolkit"
import { localStorageGetToDo, localStorageSaveToDo } from "../localStorage/localStoage";

//getting the inital state from the local storage
const initialState= localStorageGetToDo();

//creating slice 
const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        //reducer to add new ToDo Item
        addTodo: (state, action)=>{
            state.push({id:action.payload.id, task: action.payload.task, dueDate: action.payload.dueDate, status:false})
            localStorageSaveToDo(state);
        },
        //reducer to edit the existing ToDo item
        editTodo: (state, action)=>{
        
            if(state[action.payload.index]){
                state[action.payload.index].task=action.payload.task;
                state[action.payload.index].dueDate=action.payload.dueDate;
                localStorageSaveToDo(state);
            }
        },

        //reducer to delete the ToDo
        deleteTodo: (state, action)=>{
           state.splice(action.payload.index,1);
           localStorageSaveToDo(state); 
        },

        //reducer to toggle between complete and pending status of ToDo Item
        toggleToDo:(state,action)=>{
            if(state[action.payload]){
                state[action.payload].status=!state[action.payload].status;
            }
            localStorageSaveToDo(state);
        },
    }
});


export const {addTodo, editTodo, toggleToDo, deleteTodo, deleteAllToDo} = todoSlice.actions;

export default todoSlice.reducer;