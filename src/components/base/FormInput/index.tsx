import React from 'react';

// Define the structure of the props using type
type FormInputProps = {
  text: string; // The input text
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle text change
};

const FormInput = ({ text, onChange }: FormInputProps) => {
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={onChange}
        className="border border-gray-400 py-[7px]"
      />
    </div>
  );
};

export default FormInput;
