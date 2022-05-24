import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import CreateTaskForm from './components/CreateTaskForm';
import Tasks from './components/Tasks';

function App() {
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState([])

  // Get All Tasks at first loading
  useEffect(() => {
    const getTasks = async () => {
      const tasks = await fetchTasks()
      setTasks(tasks)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const tasks = await res.json()

    return tasks
  }

  // Fetch Tasks
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const task = await res.json()

    return task
  }

  // Toggle Add Task Form
  const toggleForm = () => {
    setShowForm(!showForm)
  }

  // Create a Task
  const createTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
    
    const newTask = await res.json()

    setTasks([...tasks, newTask])
  }

  // Delete a Task
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    setTasks(tasks.filter( (task) => task.id !== id ))
  }

  // Toggle Reminder on a Task
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const taskToUpdate = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskToUpdate),
    })
    
    const updatedTask = await res.json()

    setTasks(
      tasks.map( 
        (task) => task.id === id 
        ? { ...task, reminder: updatedTask.reminder } 
        : task 
      )
    )  
  }

  return (
    <Router>
      <div className="container">

        <Header showForm={ showForm } onAdd={ toggleForm }/>

        <Routes>
          
          <Route path='/' exact element={
            <>
            { showForm && (<CreateTaskForm onAdd={ createTask } />)}

            { tasks.length > 0
              ? (<Tasks tasks={ tasks } onDelete={ deleteTask } onToggleReminder={ toggleReminder }/>)
              : ('No Tasks to Show')
            }

            <Footer />
            </>
          } />

          <Route path='/about' element={<About />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
