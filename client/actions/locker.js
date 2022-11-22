import { getLocker, addItem } from '../apis/locker'

export const VIEW = 'VIEW_LOCKER'
export const ADD_ITEM = 'ADD_ITEM'

export function viewLocker(items) {
  return {
    type: 'VIEW_LOCKER',
    payload: items,
  }
}

//GET
export function fetchLocker() {
  return (dispatch) => {
    return getLocker().then((items) => {
      dispatch(viewLocker(items))
    })
  }
}

//ADD
export function submitItem(item) {
  return (dispatch) => {
    return addItem(item).then((item) => {
      dispatch(viewLocker(item))
    })
  }
}
