import { getLocker, addItem, deleteItem } from '../apis/locker'

export const SHOW_LOCKER = 'SHOW_LOCKER'
export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'

export function showLocker(items) {
  return {
    type: SHOW_LOCKER,
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

//DELETE
export function removeItem(id) {
  return {
    type: DELETE_ITEM,
    payload: id,
  }
}

export function deleteLocker(id) {
  return (dispatch) => {
    return deleteItem(id).then(() => {
      dispatch(removeItem(id))
    })
  }
}
