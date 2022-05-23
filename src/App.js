import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Weekly meeting',
        day: 'May 21st at 6:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Talk to akai Alisher',
        day: 'May 21st at 5:00pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Sunday cycling',
        day: 'May 22nd at 6:00am',
        reminder: false,
    }
  ])

  // Add a Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete a Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map(
        (task) => task.id === id 
        ? {...task, reminder: !task.reminder} 
        : task
      )
    )
  }

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={ addTask } />
      { tasks.length > 0 
        ? (<Tasks tasks={ tasks } onDelete={ deleteTask } onToggle={ toggleReminder }/>)
        : ('No Tasks to Show')
      }
    </div>
  );
}

export default App;
