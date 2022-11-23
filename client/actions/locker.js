import { getLocker, addItem } from '../apis/locker'

export const SHOW_LOCKER = 'SHOW_LOCKER'
export const ADD_ITEM = 'ADD_ITEM'

export function showLocker(items) {
  return {
    type: 'SHOW_LOCKER',
    payload: items,
  }
}

//GET
export function fetchLocker() {
  return (dispatch) => {
    return getLocker().then((items) => {
      dispatch(showLocker(items))
    })
  }
}

//ADD
export function submitItem(item) {
  return (dispatch) => {
    return addItem(item).then((item) => {
      dispatch(showLocker(item))
    })
  }
}
