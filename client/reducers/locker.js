import { SHOW_LOCKER, ADD_ITEM } from '../actions/locker'

const initialState = []

export default function lockerReducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SHOW_LOCKER:
      return payload

    case ADD_ITEM:
      return [...state, payload]

    default:
      return state
  }
}
