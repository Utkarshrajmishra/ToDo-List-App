import Input from "../Input/Input";
import Button from "../Button/Button";
const Container = () => {
  return (
    <>
      <main className="w-[700px] min-h-[400px] outline outline-2 outline-zinc-700 bg-neutral-950 p-6 rounded-xl z-20 flex flex-col gap-3">
        <h1 className="text-zinc-400 text-3xl font-black text-center tracking-wide font-poppins">
          ToDo List
        </h1>
        <div className="flex gap-3">
          <Input />
          <Button variant={"add"}/>
        </div>
      </main>
    </>
  );
};

export default Container;
