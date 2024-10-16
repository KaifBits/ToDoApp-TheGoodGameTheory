import React, { useEffect, useState } from 'react';
import HomeView from '../../views/HomeView';

// Define the structure of the task object using type
type Task = {
  text: string;
  status: boolean;
};

const HomeContainer = () => {
  const [text, setText] = useState<string>('');
  const [list, setList] = useState<Task[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // Fetching the tasks from local storage
  useEffect(() => {
    const storedList = localStorage.getItem('list');
    if (storedList) {
      const list: Task[] = JSON.parse(storedList);
      setList(list);
    } 
  }, []);

  // Add item to list
  const handleSubmit = () => {
    const storedList = localStorage.getItem('list');
    const currentList: Task[] = storedList ? JSON.parse(storedList) : [];
  
    // Check if text input is not empty
    if (text) {
      
      const newTask: Task = { text: text, status: false }; 
      const updatedList = [...currentList, newTask];
      setList(updatedList);
      localStorage.setItem('list', JSON.stringify(updatedList));
      setText('');
    }
  };
  

  // Checkbox toggle
  const handleCheck = (id: number) => {
    const obj = list[id];
    obj.status = !obj.status;
    list[id] = obj; 
    localStorage.setItem('list', JSON.stringify(list));
    setRefresh(!refresh);
  };

  //to delete the task
  const handleDelete = (id: number) => {
    const arr=[];
  for(let i=0;i<list.length;i++){
    if(i!==id){
     arr.push(list[i]);
    }
  }
    setList(arr);
    localStorage.setItem('list', JSON.stringify(arr));
   
  };

  return (
    <div>
      <HomeView
        text={text}
        onChange={handleChange}
        onSubmit={handleSubmit}
        list={list}
        onCheck={handleCheck}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default HomeContainer;
