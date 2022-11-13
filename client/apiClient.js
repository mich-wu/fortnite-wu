import request from 'superagent'

export function getItemShop() {
  return request
    .get('https://api.fortnitetracker.com/v1/store')
    .then((response) => {
      return response.body
    })
}
