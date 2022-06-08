// the reducer function takes the current state and the action that just got dispatched
// in order to computer the NEW application state!
// it's also a PURE FUNCTION (same input --> same output)

import { SET_USERNAME } from '../actions'

// just like a component's state, even the redux store has to start from somewhere...
// so let's write the initial state for Redux!

const initialState = {
  firstName: '',
}

// = initialState means the DEFAULT VALUE of the argument!
const userReducer = (state = initialState, action) => {
  // the reducer function will be in charge of computing the
  // new state of the application every time an action gets dispatched
  // our reducer needs to be told what to do when a particular action gets dispatched
  // so we have a bunch of possible actions, so let's write a switch case to manage them all!
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        firstName: action.payload,
      }
    default:
      // the default case is for an action.type that we didn't think of
      // maybe an edge case, maybe a bug, something unhandled...
      // what is the new state we're going to compute out of this edge case??
      return state
    // returning the state as it was in our default case makes the application unbreakable!
  }
}

export default userReducer
