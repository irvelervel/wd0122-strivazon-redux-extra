import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from '../reducers/userReducer'
import cartReducer from '../reducers/cartReducer'
import bookReducer from '../reducers/bookReducer'

// now that we divided our single reducer into multiple ones, it's time
// to join them back into a single redux store! we can use combineReducers
// to recreate the structure and assign each store 'slice' to its corresponding reducer

const store = configureStore({
  reducer: combineReducers({
    cart: cartReducer,
    user: userReducer,
    book: bookReducer,
  }),
  // we're going to tell Redux which reducer function to use!
})

export default store

// the final step now is to INJECT the redux store into our component tree
