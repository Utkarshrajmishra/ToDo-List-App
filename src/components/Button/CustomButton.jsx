import { MdCheckCircle, MdEdit, MdDelete } from "react-icons/md";

/**
 * CustomButton component renders a button with different styles and icons based on the variant prop.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.variant - The variant of the button, which determines its style and icon.
 * @param {function} props.onClick - The function to call when the button is clicked.
 */
const CustomButton = ({ variant, onClick }) => {
  // Define styles for different button variants
  const buttonStyles = {
    add: "bg-indigo-700 hover:bg-indigo-800",
    edit: "bg-blue-900 hover:bg-blue-950",
    delete: "bg-red-900 hover:bg-red-950",
    toggle: "bg-green-900 hover:bg-green-950",
    deleteAll: "bg-red-700 hover:bg-red-800",
  };

  // Map button variants to their respective icons and text
  const iconMapping = {
    add: "Add ToDo ",
    edit: <MdEdit fontSize={15} />,
    delete: <MdDelete fontSize={15} />,
    toggle: <MdCheckCircle fontSize={15} />,
    deleteAll: "Delete All 🗑️",
  };

  return (
    <button
      // Apply styles based on the button variant
      className={`px-3 py-2 flex justify-center rounded-md text-sm text-zinc-300 font-bold ${buttonStyles[variant]}`}
      onClick={onClick} // Attach onClick handler to the button element
    >
      {/* Display the appropriate icon or text based on the button variant */}
      {iconMapping[variant]}
    </button>
  );
};

export default CustomButton;
