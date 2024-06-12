import React from 'react';
import AddTask from "./Components/Addtasks/AddTask";  
import ListTask from './Components/ListTasks/ListTask';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Todo List</h1>
      <AddTask/>
      <ListTask/>
    </div>
  );
}

export default App;
