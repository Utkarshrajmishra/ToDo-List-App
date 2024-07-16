import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import CustomButton from "../Button/CustomButton";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/TodoSlice";

// Define the schema for form validation using Zod
const todoSchema = z.object({
  todoItem: z.string().min(1, "Todo item cannot be empty"),
  dueDate: z.string().min(1, "Due date cannot be empty"),
});

// Functional component to handle adding a new Todo item
const AddTodo = () => {
  const dispatch = useDispatch();

  // Initialize the form with react-hook-form and zodResolver
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(todoSchema),
  });

  /**
   * Handles form submission to add a new todo item.
   * @param {Object} data - The form data.
   */
  const addToDoItem = (data) => {
    // Add the todo item
    dispatch(addTodo({ task: data.todoItem, dueDate: data.dueDate }));

    // Clear the form after submission
    reset();
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(addToDoItem)}>
      <div className="flex gap-2">
        {/* Input field for the todo item */}
        <div className="flex flex-col w-[50%]">
          <input
            type="text"
            name="todoItem"
            placeholder="Input a new ToDo"
            className="bg-neutral-800 p-2 rounded-lg text-zinc-300 outline outline-1 outline-zinc-500 font-poppins w-full text-sm"
            {...register("todoItem")}
          />
          {/* Display error message for todo item */}
          {errors.todoItem && (
            <span className="text-red-500">{errors.todoItem.message}</span>
          )}
        </div>

        {/* Input field for the due date */}
        <div className="flex flex-col w-[50%]">
          <input
            type="date"
            name="dueDate"
            className="bg-neutral-800 text-zinc-300 p-2 rounded-lg font-poppins outline outline-1 outline-zinc-500 text-sm w-full"
            {...register("dueDate")}
          />
          {/* Display error message for due date */}
          {errors.dueDate && (
            <span className="text-red-500">{errors.dueDate.message}</span>
          )}
        </div>
      </div>

      {/* Custom button to submit the form */}
      <CustomButton variant={"add"} />
    </form>
  );
};

export default AddTodo;
