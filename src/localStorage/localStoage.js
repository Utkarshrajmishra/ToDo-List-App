/**
 * Function to get all the ToDo items from the local storage.
 * @returns {Array} - An array of ToDo items, or an empty array if no items exist or an error occurs.
 */
export const localStorageGetToDo = () => {
  try {
    const todoItems = localStorage.getItem("todo");

    // Returning an empty array if no ToDo item exists
    if (todoItems == null) return [];
    return JSON.parse(todoItems);
  } catch (e) {
    console.log(`Some error has occurred: ${e}`);
    return [];
  }
};

/**
 * Function to save new ToDo items to the local storage.
 * @param {Array} ToDoItems - An array of ToDo items to be saved.
 */
export const localStorageSaveToDo = (ToDoItems) => {
  try {
    const todoItems = JSON.stringify(ToDoItems);
    localStorage.setItem("todo", todoItems);
  } catch (e) {
    console.log("Some error occurred while saving Todo:", e);
  }
};
