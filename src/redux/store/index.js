import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from '../reducers/userReducer'
import cartReducer from '../reducers/cartReducer'
import bookReducer from '../reducers/bookReducer'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// now that we divided our single reducer into multiple ones, it's time
// to join them back into a single redux store! we can use combineReducers
// to recreate the structure and assign each store 'slice' to its corresponding reducer

// we'll need to write a configuration object for the persistance layer
const persistConfig = {
  key: 'root', // I'm planning to remember the whole redux store
  storage,
}

const combinedReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  book: bookReducer,
})

const persistedReducer = persistReducer(persistConfig, combinedReducer)
// this is a "persisted" version of our combinedReducer

const store = configureStore({
  reducer: persistedReducer,
  // we're going to tell Redux which reducer function to use!
})

// we want to create a persisted version of the store as well!
const persistor = persistStore(store)

export { store, persistor }

// the final step now is to INJECT the redux store into our component tree
