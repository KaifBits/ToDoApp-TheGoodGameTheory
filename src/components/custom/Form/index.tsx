import React from 'react';
import FormInput from '../../base/FormInput';
import FormButton from '../../base/FormButton';

// Define the structure of the props using type
type FormProps = {
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  buttonName?:string;
};

// Regular function component definition
const Form = ({ text, onChange, onSubmit }: FormProps) => {
  return (
    <div className="flex my-5">
      <FormInput text={text} onChange={onChange} />
      <FormButton onSubmit={onSubmit} buttonName="Add Task" />
    </div>
  );
};

export default Form;
