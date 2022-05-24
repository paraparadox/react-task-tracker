import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'

const Task = ({ task, onDelete, onToggleReminder}) => {
  return (
    <div className={ `task ${task.reminder && 'reminder'}` } onDoubleClick={ () => onToggleReminder(task.id) }>
      <h3>
        { task.text }
        <FaTimes style={{ color: 'red' }} onClick={ () => onDelete(task.id) } />
      </h3>
      <p>{ task.date }</p>
    </div>
  )
}

Task.defaultProps = {
  task: 'Some Task',
}

Task.propTypes = {
  task: PropTypes.object,
  onDelete: PropTypes.func.isRequired,
  onToggleReminder: PropTypes.func.isRequired,
}

export default Task
