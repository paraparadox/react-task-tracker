import { useState } from "react"
import PropTypes from 'prop-types'

const CreateTaskForm = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [date, setDate] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please enter a text for the task')
      return
    }

    onAdd({ text, date, reminder })

    setText('')
    setDate('')
    setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={ onSubmit }>
      
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Task" value={ text } onChange={ (e) => setText(e.target.value) } />
      </div>

      <div className="form-control">
        <label>Date & Time</label>
        <input type="text" placeholder="Date & Time" value={ date } onChange={ (e) => setDate(e.target.value) } />
      </div>

      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input type="checkbox" checked={ reminder } onChange={ (e) => setReminder(e.currentTarget.checked) } />
      </div>

      <input type="submit" className="btn btn-block" value="Create" />

    </form>
  )
}

CreateTaskForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
}

export default CreateTaskForm
