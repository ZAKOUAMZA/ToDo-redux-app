import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../Js/Actions/taskActions';
import './AddTask.css';

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      const id = Date.now(); 
      dispatch(addTask(id, description));
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <textarea
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Ajouter une nouvelle tâche..."
        className="add-task-input"
      />
      <button type="submit" className="add-task-button">Ajouter une tâche</button>
    </form>
  );
};

export default AddTask;
