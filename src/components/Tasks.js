import { useState } from 'react'

const Tasks = () => {
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

  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  )
}

export default Tasks
