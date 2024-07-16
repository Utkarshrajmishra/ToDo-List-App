import { configureStore} from "@reduxjs/toolkit";
import ToDoReducer from "./TodoSlice";

const store= configureStore({
    reducer:{
        todos: ToDoReducer
    }
});

export default store;