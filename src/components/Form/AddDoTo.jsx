import CustomButton from "../Button/CustomButton";
const AddTodo = () => {
  return (
    <>
      <form className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Input a new ToDo"
            className="bg-neutral-800 p-2 rounded-lg text-zinc-300 outline outline-1 outline-zinc-500 font-poppins w-[50%] md:w-full text-sm "
          />

          <input
            type="date"
            name="todo-date"
            id="todo-date"
            className="bg-neutral-800 text-zinc-300 p-2 rounded-lg font-poppins outline outline-1 outline-zinc-500 text-sm w-[50%]"
          />
        </div>
        <CustomButton variant={"add"} />
      </form>
    </>
  );
};

export default AddTodo;
