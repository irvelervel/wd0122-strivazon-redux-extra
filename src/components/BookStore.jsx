import { useState, useEffect } from 'react'
import BookList from './BookList'
import BookDetail from './BookDetail'
import { Alert, Col, Row, Spinner } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getBooksAction } from '../redux/actions'

// const mapStateToProps = (state) => {
//   return {
//     booksFromReduxStore: state.book.stock, // <-- the array of books from the redux store
//     errorFetchingBooks: state.book.error,
//     areBooksLoading: state.book.loading,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getBooks: () => {
//       dispatch(getBooksAction())
//     },
//   }
// }

const BookStore = () => {
  // state = {
  //   // books: [], // <-- this was a local state holding the books, I don't need it anymore...
  //   bookSelected: null,
  // }

  const [bookSelected, setBookSelected] = useState(null)

  const booksFromReduxStore = useSelector((state) => state.book.stock)
  const errorFetchingBooks = useSelector((state) => state.book.error)
  const areBooksLoading = useSelector((state) => state.book.loading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooksAction())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const changeBook = (book) => setBookSelected(book)

  return (
    <Row>
      <Col md={4}>
        {areBooksLoading && <Spinner variant="success" animation="border" />}
        {errorFetchingBooks ? (
          <Alert variant="danger">An error happened :(</Alert>
        ) : (
          <BookList
            bookSelected={bookSelected}
            changeBook={changeBook}
            books={booksFromReduxStore}
          />
        )}
      </Col>
      <Col md={8}>
        <BookDetail bookSelected={bookSelected} />
      </Col>
    </Row>
  )
}

export default BookStore
