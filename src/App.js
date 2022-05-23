import { useEffect, useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // Add a Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete a Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

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
      <Header onAdd={ () => setShowAddTask(!showAddTask) } showAdd={ showAddTask }/>
  
      { showAddTask && (<AddTask onAdd={ addTask } />) }
  
      { tasks.length > 0 
        ? (<Tasks tasks={ tasks } onDelete={ deleteTask } onToggle={ toggleReminder }/>)
        : ('No Tasks to Show')
      }

    </div>
  );
}

export default App;
