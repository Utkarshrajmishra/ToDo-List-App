import { MdEdit, MdDelete } from "react-icons/md";

/**
 * CustomButton component renders a button with different styles and icons based on the variant prop.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.variant - The variant of the button, which determines its style and icon.
 */
const CustomButton = ({ variant }) => {
  // Define styles for different button variants
  const buttonStyles = {
    add: "bg-indigo-700 hover:bg-indigo-800",
    edit: "bg-green-700 hover:bg-green-800",
    delete: "bg-red-700 hover:bg-red-800",
    deleteAll: "bg-red-700 hover:bg-red-800",
  };

  // Map button variants to their respective icons and text
  const iconMapping = {
    add: "Add ToDo ",
    edit: <MdEdit fontSize={20} />,
    delete: <MdDelete fontSize={20} />,
    deleteAll: "Delete All 🗑️",
  };

  return (
    <button
      // Apply styles based on the button variant
      className={`px-3 py-2 flex justify-center rounded-md text-sm text-zinc-300 font-bold ${buttonStyles[variant]}`}
    >
      {/* Display the appropriate icon or text based on the button variant */}
      {iconMapping[variant]}
    </button>
  );
};

export default CustomButton;
