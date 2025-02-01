

type FormButtonProps = {
  type?:'submit'|'delete';
  variant:'primary' | 'secondary' | 'success' | 'danger' | 'link';
  buttonName?:string; 
  fontSize?: string;
  onSubmit?: () => void;
  onDelete?:(id:number)=>void;
  id?:number;
  
};

const ButtonStyles=(variant:string)=>{
  switch (variant) {
    case 'primary':
      return 'bg-blue-500 text-white hover:bg-blue-600';
    case 'secondary':
      return 'bg-gray-500 text-white hover:bg-gray-600';
    case 'success':
      return 'bg-yellow-400 text-black font-bold hover:bg-green-600';
    case 'danger':
      return 'bg-red-500 text-white hover:bg-red-600';
    case 'link':
      return 'text-white bg-blue-500 w-44 hover:text-blue-700';
    default:
      return 'bg-transparent border-2 border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white';
  }

}

const FormButton = ({ type,variant,buttonName,fontSize,onSubmit,onDelete,id}: FormButtonProps) => {
  const style=`${ButtonStyles(variant)} ${fontSize} rounded-full  px-5 py-2.5 text-center mb-2   `
  return (
    <button
      className={style}
      onClick={() => {
        if (type === 'submit' && onSubmit) {
          onSubmit();
        } else if (type === 'delete' && onDelete && id !== undefined) {
          onDelete(id);
        }
      }}
    >
      {buttonName}
    </button>
  );
};

export default FormButton;
