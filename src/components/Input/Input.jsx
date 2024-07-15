const Input = () => {
  return (
    <>
      <input
        type="text"
        name="todo-input"
        id="todo-input"
        placeholder="Add new ToDo"
        className="bg-neutral-900 rounded-md w-full h-10 p-3 text-sm text-zinc-300 outline outline-1 outline-zinc-700"
      />
    </>
  );
};

export default Input;
