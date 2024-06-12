import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../../Js/Actions/taskActions';
import './Task.css';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    dispatch(editTask(task.id, description));
    setIsEditing(false);
  };

  return (
    <div className="task-container">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
        className="task-checkbox"
      />
      {isEditing ? (
        <div className="task-edit-container">
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="task-edit-input"
          />
          <button onClick={handleEdit} className="task-edit-save">Save</button>
        </div>
      ) : (
        <span
          className={`task-description ${task.isDone ? 'task-done' : ''}`}
          onDoubleClick={() => setIsEditing(true)}
        >
          {task.description}
        </span>
      )}
    </div>
  );
};

export default Task;
