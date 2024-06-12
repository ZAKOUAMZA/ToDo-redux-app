import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from '../Tasks/Task';
import './ListTask.css';

const ListTask = () => {
  const [filter, setFilter] = useState('all');
  const tasks = useSelector(state => {
    if (filter === 'done') {
      return state.tasks.filter(task => task.isDone);
    } else if (filter === 'notDone') {
      return state.tasks.filter(task => !task.isDone);
    }
    return state.tasks;
  });

  return (
    <div className="list-task-container">
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')} className={`filter-button ${filter === 'all' ? 'active' : ''}`}>Voir toutes les tâches</button>
        <button onClick={() => setFilter('done')} className={`filter-button ${filter === 'done' ? 'active' : ''}`}>Voir les tâches terminées</button>
        <button onClick={() => setFilter('notDone')} className={`filter-button ${filter === 'notDone' ? 'active' : ''}`}>Voir les tâches non terminées</button>
      </div>
      <div className="tasks-list">
        {tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
