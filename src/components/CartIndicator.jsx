import Button from 'react-bootstrap/Button'
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { setUsernameAction } from '../redux/actions'

// we need to write mapStateToProps for EVERY component we want to empower with read access to the redux store
// mapStateToProps is a function: it will return an OBJECT
// it is called mapStateToProps because every PROPERTY in this object
// will become a PROP for CartIndicator
const mapStateToProps = (state) => {
  return {
    cartLength: state.cart.content.length,
    username: state.user.firstName,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsername: (newName) => {
      dispatch(setUsernameAction(newName))
    },
  }
}

const CartIndicator = ({ cartLength, username, setUsername }) => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // now I want to dispatch an action for setting the username
    setUsername(inputValue)
  }

  return (
    <div className="ml-auto mt-2">
      {username ? (
        <Button color="primary" onClick={() => navigate('/cart')}>
          <FaShoppingCart />
          <span className="ml-2">{cartLength}</span>
        </Button>
      ) : (
        // the onSubmit event listener is all about listening the ENTER key press
        <Form onSubmit={handleSubmit}>
          <Form.Control
            placeholder="Log in here!"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Form>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIndicator)
// connect works just like withRouter
// withRouter was creating a HOC -> higher order component

// connect takes up to two arguments: mapStateToProps and mapDispatchToProps
// mapStateToProps defines what we're going to READ from the redux store (read access)
// mapDispatchToProps defines in which ways we're going to affect the redux store (write access)
