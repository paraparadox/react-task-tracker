import PropTypes from 'prop-types'

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  )
}

Tasks.propTypes = {
    tasks: PropTypes.array,
}

export default Tasks
