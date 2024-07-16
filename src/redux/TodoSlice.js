import {createSlice} from "@reduxjs/toolkit"
import { localStorageGetToDo, localStorageSaveToDo } from "../localStorage/localStoage";

const initialState= localStorageGetToDo();

const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo: (state, action)=>{
            state.push({task: action.payload.task, dueDate: action.payload.dueDate, status:false})
            localStorageSaveToDo(state);
        },

        editTodo: (state, action)=>{
            const {index, newToDo} = action.payload;
            if(state[index]){
                state[index]=newToDo;
                localStorageSaveToDo(state);
            }
        },

        deleteTodo: (state, action)=>{
           state.splice(action.payload,1);
           localStorageSaveToDo(state); 
        },

        toggleToDo:(state,action)=>{
            if(state[action.payload]){
                state[action.payload].status=!state[action.payload].status;
            }
            localStorageSaveToDo(state);
        },

        deleteAllToDo:(state,action)=>{
            localStorageSaveToDo([]);
        }
    }
});


export const {addTodo, editTodo, toggleToDo, deleteAllToDo} = todoSlice.actions;

export default todoSlice.reducer;