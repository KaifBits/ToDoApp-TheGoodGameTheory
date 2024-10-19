import React from 'react';
import logo from '../../assets/Todologo.png';
import FormList from '../../components/custom/FormList';
import Form from '../../components/custom/Form';

// Define the structure of the props using type
type HomeViewProps = {
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  list: { text: string; status: boolean }[];
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
};

const HomeView = ({ text, onChange, onSubmit, list, onCheck,onDelete }: HomeViewProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <img src={logo} alt="logo" className="my-5" />
      <Form text={text} onChange={onChange} onSubmit={onSubmit} />
      <div className="w-1/2 flex flex-col items-center justify-center bg-cyan-300 rounded-md">
        {list.map((val, index) => {
          console.log(val.text);
          return (
            <FormList
              key={index} 
              text={val.text}
              status={val.status}
              id={index}
              onCheck={onCheck}
              onDelete={onDelete}
              
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeView;
