import PropTypes from 'prop-types'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggleReminder }) => {
  return (
    <>
      {
        tasks.map( (task) => (
          <Task key={ task.id } task={ task } onDelete={ onDelete } onToggleReminder={ onToggleReminder }/>
        ))
      }
    </>
  )
}

Tasks.defaultProps = {
  tasks: [],
}

Tasks.propTypes = {
  tasks: PropTypes.array,
  onDelete: PropTypes.func.isRequired,
  onToggleReminder: PropTypes.func.isRequired,
}

export default Tasks
