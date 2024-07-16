import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { editTodo } from "../../redux/TodoSlice";

// Define the schema for form validation using Zod
const todoSchema = z.object({
  task: z.string().min(1, "Task cannot be empty"), // Task must be a non-empty string
  dueDate: z.string().min(1, "Due date cannot be empty"), // Due date must be a non-empty string
});

/**
 * EditTodoModal component for editing a todo item.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Whether the modal is open.
 * @param {function} props.onClose - Function to close the modal.
 * @param {Object} props.todo - The todo item to be edited.
 * @param {number} props.index - The index of the todo item in the list
 */
const EditTodoModal = ({ isOpen, onClose, todo, index }) => {
  const dispatch = useDispatch(); // Initialize the Redux dispatch function

  // Initialize the form with react-hook-form and zodResolver for validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(todoSchema), // Apply Zod schema for validation
    defaultValues: { task: todo.task, dueDate: todo.dueDate }, // Set default form values
  });

  // Reset form values when modal opens or the todo item changes
  useEffect(() => {
    if (isOpen) {
      reset({ task: todo.task, dueDate: todo.dueDate });
    }
  }, [isOpen, reset, todo]);

  /**
   * Handle form submission.
   *
   * @param {Object} data - The form data containing the updated task and due date.
   */
  const handleUpdate = (data) => {
    dispatch(
      editTodo({ index: index, task: data.task, dueDate: data.dueDate })
    );
    onClose(); // Close the modal after dispatching the edit action
  };

  /**
   * Handle overlay click to close modal.
   *
   * @param {Object} e - The click event.
   */
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // If the modal is not open, return null to render nothing
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div className="bg-neutral-900 p-4 rounded-lg w-[350px]">
        <h2 className="text-zinc-300 mb-2 font-semibold">Edit Todo</h2>
        <form onSubmit={handleSubmit(handleUpdate)}>
          <div className="mb-2">
            <input
              name="task"
              type="text"
              placeholder="Task"
              className="w-full text-sm p-2 mb-2 rounded-lg outline outline-1 outline-zinc-400 bg-neutral-800 text-zinc-200 font-poppins"
              {...register("task")} // Register input for validation and state management
            />
            {errors.task && (
              <span className="text-red-500 text-sm">
                {errors.task.message} {/* Display task error message */}
              </span>
            )}
          </div>
          <div className="mb-2">
            <input
              name="dueDate"
              type="date"
              className="w-full text-sm p-2 mb-2 rounded-lg outline outline-1 outline-zinc-400 bg-neutral-800 text-zinc-200 font-poppins"
              {...register("dueDate")} // Register input for validation and state management
            />
            {errors.dueDate && (
              <span className="text-red-500 text-sm">
                {errors.dueDate.message} {/* Display due date error message */}
              </span>
            )}
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="bg-red-600 p-2 rounded text-white text-sm font-semibold"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 p-2 rounded text-white text-sm font-semibold"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTodoModal;
