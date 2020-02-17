import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks
    };
  }

  toggleItem = itemId => {
    console.log(itemId);
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (itemId === item.Id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  addItem = item => {
    console.log(item);
    
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };

    this.setState({
      tasks: [...this.state.tasks, newItem]
    });
  };

  clearCompleted = () => {
    console.log("clearCompleted");
    this.setState({
      tasks: this.state.tasks.filter(item => 
       (item.completed === false)
      )
    });
  };

  render() {
    return (
      <div className="App">
      <div>
        <h2>Todo App!</h2>
        <TodoForm 
        addItem={this.addItem}/>
      </div>
      <div>
      <TodoList 
      tasks={this.state.tasks}
      toggleItem={this.toggleItem}
      clearCompleted={this.clearCompleted}
      />
      </div>
      </div>
    );
  }
}

export default App;
