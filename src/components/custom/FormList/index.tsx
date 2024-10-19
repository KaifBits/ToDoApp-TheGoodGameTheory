
import CheckBox from '../../base/CheckBox';
import FormButton from '../../base/FormButton';


type FormListProps = {
  text: string;
  status: boolean;
  id: number;
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
  type?:'submit'|'delete';
  variant?:'primary' | 'secondary' | 'success' | 'danger' | 'link';
  buttonName?:string; 
  fontSize?: string;

  
 
};

const FormList = ({ text, status, id, onCheck ,onDelete}: FormListProps) => {
  return (
    <div
      className="flex w-3/4 h-auto space-x-2 my-5"
      
    >
      <div onClick={() => onCheck(id)}>
      <CheckBox status={status} />
      </div>
      <div className="text-xl font-semibold h-auto text-black w-full">{text}</div>
     <FormButton  type='delete' variant='danger' buttonName="delete" fontSize='text-lg'  onDelete={onDelete} id={id}/>
    </div>
  );
};

export default FormList;
