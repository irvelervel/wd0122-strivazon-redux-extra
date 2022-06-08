import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux'
import { addToCartActionWithThunk } from '../redux/actions'

// useSelector can be seen as a replacement for mapStateToProps!
// it's going to be used for selecting a redux property in read-mode

// const mapStateToProps = (state) => {
//   return {
//     username: state.user.firstName,
//     // username is now a prop for BookDetail! this.props.username
//   }
// }

// mapDispatchToProps is a function returning an object!
// every key in the object it's returning will be a prop for the component!

// if the keys of the object mapStateToProps is returning are tipically properties,
// the keys of the object mapDispatchToProps is returning are typically METHODS
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addToCart: (bookToAdd) => {
//       dispatch(addToCartActionWithThunk(bookToAdd))
//     },
//   }
// }

// RULES OF HOOKS
// 1) you can use hooks just in functional components
// 2) use hooks before the return statement, outside of any function, loop, condition, etc.

const BookDetail = ({ bookSelected }) => {
  // state = {
  //   book: null,
  // }

  const [book, setBook] = useState(null)

  useEffect(() => {
    setBook(bookSelected)
  }, [bookSelected])

  // state is the whole redux store

  const username = useSelector((state) => state.user.firstName)
  // look out! now username is NOT arriving from the props...!

  const dispatch = useDispatch() // useDispatch gets you access to the dispatch() function immediately!

  // componentDidUpdate(prevProps) {
  //   if (prevProps.bookSelected !== this.props.bookSelected) {
  //     this.setState({
  //       book: this.props.bookSelected,
  //     })
  //   }
  // }

  return (
    <div className="mt-3">
      {book ? (
        <>
          <Row>
            <Col sm={12}>
              <h1>{book.title}</h1>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col sm={4}>
              <div className="mt-3">
                <img
                  className="book-cover"
                  src={book.imageUrl}
                  alt="book selected"
                />
              </div>
            </Col>
            <Col sm={8}>
              <p>
                <span className="font-weight-bold">Description:</span>
                {book.description}
              </p>
              <p>
                <span className="font-weight-bold">Price:</span>
                {book.price}
              </p>
              {/* I WANT TO HIDE THIS BUTTON IF THE USER IS NOT LOGGED IN */}
              {/* I WANT TO HIDE THIS BUTTON WHEN state.user.firstName === '' */}
              {username ? (
                // the user is already logged in!
                <Button
                  color="primary"
                  onClick={() => {
                    // addToCart(book) // there is no addToCart prop anymore!!
                    dispatch(addToCartActionWithThunk(book))
                  }}
                >
                  ADD TO CART
                </Button>
              ) : (
                <div>Log in for adding books to your cart!</div>
              )}
            </Col>
          </Row>
        </>
      ) : (
        <Row>
          <Col sm={12}>
            <h3>Please select a book!</h3>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default BookDetail

// what do I need to do from here? do I need just to read or do I need to write?
// I actually just need to "write" (dispatch an action) from here!
