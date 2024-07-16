export const localStorageGetToDo=()=>{
    try{
        const todoItems=localStorageState.getItems('todo');
        if(todoItems==null) return [];
        return JSON.parse(todoItems);
    }
    catch(e){
        console(`Some error have occured ${e}`)
        return [];
    }
}

export const localStorageSaveToDo=(ToDoItems)=>{
    try{
        const todoItems=JSON.stringify(ToDoItems);
        localStorage.setItem('todo',todoItems);
    }
    catch(e){
        console.log("Some error occured while saving Todo:", e)
    }
}