import { MdAddCircle, MdEdit, MdDelete } from "react-icons/md";

const CustomButton = ({variant, classes}) => {
    const buttonStyles = {
      add: "bg-indigo-700 hover:bg-indigo-800",
      edit: "bg-green-700 hover:bg-green-800",
      delete: "bg-red-700 hover:bg-red-800",
      deleteAll: "bg-red-700 hover:bg-red-800"
    };

    const iconMapping = {
      add: "Add ToDo ",
      edit: <MdEdit fontSize={20} />,
      delete: <MdDelete fontSize={20} />,
      deleteAll: "Delete All 🗑️",
    };

    return (
      <button
        className={`px-3 py-2 flex justify-center rounded-md text-sm text-zinc-300 font-bold ${buttonStyles[variant]}`}
        
      >
        {iconMapping[variant]}
      </button>
    );
};

export default CustomButton
