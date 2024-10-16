import React from 'react';
import CheckBox from '../../base/CheckBox';
import DeleteButton from '../../base/DeleteButton';

// Define the structure of the props using type
type FormListProps = {
  text: string;
  status: boolean;
  id: number;
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
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
      <div onClick={()=>onDelete(id)} className='w-20 flex justify-end '>
      <DeleteButton/>
      </div>
    </div>
  );
};

export default FormList;
