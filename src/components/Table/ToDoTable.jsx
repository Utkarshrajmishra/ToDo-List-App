import { useSelector, useDispatch } from "react-redux";
import CustomButton from "../Button/CustomButton";
import { toggleToDo, deleteTodo } from "../../redux/TodoSlice";

//Functional Component to render the Todo list
const ToDoTable = () => {
  const todos = useSelector((state) => state.todos); // Fetch todos from Redux state
  const dispatch = useDispatch();

  /**
   * Handles the deletion of a todo item.
   * @param {number} index - The index of the todo item to delete.
   */
  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  /**
   * Handles toggling the completion status of a todo item.
   * @param {number} index - The index of the todo item to toggle.
   */
  const handleToggle = (index) => {
    dispatch(toggleToDo(index));
  };

  return (
    <div className="relative overflow-x-auto rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-zinc-300">
        <thead className="text-xs text-zinc-400 uppercase bg-neutral-800 ">
          <tr>
            <th scope="col" className="px-6 py-3 min-w-[200px]">
              Task
            </th>
            <th scope="col" className="px-6 py-3">
              Due Date
            </th>
            <th scope="col" className="px-6 py-3 w-[100px]">
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          {todos && todos.length > 0 ? (
            // Map over the todos array to render each todo item
            todos.map((item, index) => (
              <tr
                className={`border-b border-neutral-500 ${
                  item.status ? "bg-green-800" : ""
                }`}
                key={item.id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-sm whitespace-nowrap text-white"
                >
                  {item.task}
                </th>
                <td className="px-6 py-4 text-sm">{item.dueDate}</td>
                <td className="px-6 py-4 text-sm text-blue-500 cursor-pointer flex gap-2">
                  <CustomButton
                    variant="delete"
                    onClick={() => handleDelete(index)}
                  />
                  <CustomButton
                    variant="edit"
                    onClick={() => handleEdit(index)}
                  />
                  <CustomButton
                    variant="toggle"
                    onClick={() => handleToggle(index)}
                  />
                </td>
              </tr>
            ))
          ) : (
            // Display message when there are no todos
            <tr key="no-todos">
              <td
                colSpan={3}
                className="text-center py-4 font-italic text-gray-500"
              >
                Nothing to show
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoTable;
