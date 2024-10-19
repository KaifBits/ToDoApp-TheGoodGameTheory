import React from 'react';
import FormInput from '../../base/FormInput';
import FormButton from '../../base/FormButton';


type FormProps = {
  text: string;
  type?:'submit'|'delete';
  variant?:'primary' | 'secondary' | 'success' | 'danger' | 'link';
  buttonName?:string; 
  fontSize?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  id?:number;

};


const Form = ({text, onChange,onSubmit  }: FormProps) => {
  return (
    <div className="flex my-5">
      <FormInput text={text} onChange={onChange} />
      <FormButton   type='submit' variant='success' buttonName="Add Task" fontSize='text-lg' onSubmit={onSubmit}    />
    </div>
  );
};

export default Form;
