import AddTodo from "../Form/AddDoTo";
import CustomButton from "../Button/CustomButton";
import ToDoTable from "../Table/ToDoTable";
//Functional component to create the container 
const Container = () => {


  return (
    <>
      <main className="md:w-[600px] w-[95%] h-[400px] outline outline-2 outline-zinc-700 bg-neutral-900 md:p-6 p-3 rounded-xl z-20 flex flex-col gap-3">
        <h1 className="text-zinc-400 text-3xl font-black text-center tracking-wide font-poppins">
          ToDo List
        </h1>
        <AddTodo />
        <ToDoTable/>
      </main>
    </>
  );
};

export default Container;
