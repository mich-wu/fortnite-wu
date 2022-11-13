import request from 'superagent'

export function getItemShop() {
  return request.get('/api/v1/store').then((response) => {
    console.log(response.body)
    return response.body
  })
}
