

type CheckBoxProps = {
  status: boolean;  
};

const CheckBox = ({ status }: CheckBoxProps) => {
  return (
    <div className="flex items-start">
      <input
        id="checked-checkbox"
        type="checkbox"
        checked={status} // Use the status prop to determine the checked state
        value=""
        className="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
    </div>
  );
};

export default CheckBox;
