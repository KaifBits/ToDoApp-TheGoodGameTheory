import React from 'react';


type FormInputProps = {
  type?:string;
  placeholder?:string;
  text?: string; // The input text
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
};

const FormInput = ({ text, onChange,placeholder,type }: FormInputProps) => {
  return (
    <div>
      <input
        type={type}
        value={text}
        onChange={onChange}
        className="border border-purple-500 py-[7px] px-2 w-full h-14 bg-black rounded-2xl text-white"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
