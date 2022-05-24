import { useLocation } from "react-router-dom"
import PropTypes from 'prop-types'
import Button from "./Button"

const Header = ({ title, showForm, onAdd }) => {
  const location = useLocation()

  return (
    <div className="header">
      <h1>{ title }</h1>
      {
        location.pathname === '/' &&
        <Button color={ showForm ? 'red' : 'green' } text={ showForm ? 'Close' : 'Add' } onClick={ onAdd } />
      }
    </div>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
  showForm: false,
}

Header.propTypes = {
  title: PropTypes.string,
  showForm: PropTypes.bool,
  onAdd: PropTypes.func.isRequired,
}

export default Header
