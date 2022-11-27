import request from 'superagent'

const rootUrl = '/api/v1/locker/'

export function getLocker() {
  return request.get(rootUrl).then((result) => {
    return result.body
  })
}

export function getItem(id) {
  return request.get(`${rootUrl}${id}`).then((result) => {
    console.log(result.body)
    return result.body
  })
}

export function addItem(newItem) {
  return request
    .post(rootUrl)
    .send(newItem)
    .then((result) => {
      return result.body
    })
}
