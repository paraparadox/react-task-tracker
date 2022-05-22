import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';

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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={ tasks }/>
    </div>
  );
}

export default App;
