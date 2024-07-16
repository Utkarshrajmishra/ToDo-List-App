import { MdAddCircle, MdEdit, MdDelete } from "react-icons/md";

const CustomButton = ({variant}) => {
    const buttonStyles = {
      add: "bg-indigo-700 hover:bg-indigo-800",
      edit: "bg-green-600 hover:bg-green-700",
      delete: "bg-red-600 hover:bg-red-700",
    };

    const iconMapping = {
      add: <MdAddCircle fontSize={20} />,
      edit: <MdEdit fontSize={20} />,
      delete: <MdDelete fontSize={20} />,
    };

    return (
      <button
        className={`px-3 rounded-md text-sm text-zinc-300 font-semibold ${buttonStyles[variant]}`}
        
      >
        {iconMapping[variant]}
      </button>
    );
};

export default CustomButton
