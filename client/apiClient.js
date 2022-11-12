import request from 'superagent'

// export function getGreeting() {
//   return request.get('/greeting').then((res) => res.body.greeting)
// }

export function getItemShop() {
  return request.get('https://fortnite-api.com/v2/shop/br').then((response) => {
    return response.body
  })
}
