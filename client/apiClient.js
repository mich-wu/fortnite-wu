import request from 'superagent'

export function getItemShop() {
  return request.get('/api/v2/shop').then((response) => {
    return response.body
  })
}

export function getNews() {
  return request.get('/api/v2/news/br').then((response) => {
    //console.log('apiClient:', response.body)
    return response.body
  })
}

export function getCrew() {
  return request.get('/api/v2/crew').then((response) => {
    //console.log('crew:', response)
    return response.body
  })
}

export function getChallenges() {
  return request.get('/api/v3/challenges').then((response) => {
    return response.body
  })
}

// export function getPlayerStat() {
//   return request.get('/api/v1/profile').then((response) => {
//     return response.body
//   })
// }
