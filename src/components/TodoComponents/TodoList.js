// your components will all go in this `component` directory.
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.tasks.map(item => {
              return <Todo key={item.id} item={item} toggleItem={props.toggleItem} />;
            })}
            <button className="clr-complete" onClick={props.clearCompleted}>Completed</button>
        </div>
    );
};
export default TodoList; 