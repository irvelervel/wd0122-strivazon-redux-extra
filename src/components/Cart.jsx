import Button from 'react-bootstrap/Button'
import { FaTrash } from 'react-icons/fa'
import { Col, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCartAction } from '../redux/actions'

// const mapStateToProps = (state) => {
//   // in mapStateToProps, the state that is going to be received as the argument
//   // of the function, is STILL going to be the whole cake!
//   return {
//     cart: state.cart.content,
//     availableBooks: state.book.stock,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeFromCart: (indexToRemove) => {
//       dispatch(removeFromCartAction(indexToRemove))
//     },
//   }
// }

const Cart = () => {
  const cart = useSelector((state) => state.cart.content)
  const availableBooks = useSelector((state) => state.book.stock)

  const dispatch = useDispatch()

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: 'none' }}>
          {cart.map((book, i) => (
            <li key={i} className="my-4">
              <Button
                variant="danger"
                onClick={() => {
                  // removeFromCart(i)
                  dispatch(removeFromCartAction(i))
                }}
              >
                <FaTrash />
              </Button>
              <img
                className="book-cover-small"
                src={book.imageUrl}
                alt="book selected"
              />
              {book.title}
            </li>
          ))}
        </ul>
      </Col>
      <Row>
        <Col sm={12} className="font-weight-bold">
          TOTAL:{' '}
          {cart.reduce(
            (acc, currentValue) => acc + parseFloat(currentValue.price),
            0
          )}
        </Col>
        <Row>
          <Col sm={12} className="font-weight-bold">
            We currently have {availableBooks.length} books in stock.
          </Col>
        </Row>
      </Row>
    </Row>
  )
}

export default Cart
