import axios from 'axios';

export const axiosHackerNews = (props) => {
  return (
    axios.get(`https://hacker-news.firebaseio.com/v0/${props}`)
  )
}

// const axiosConfig = {
//   baseURL: 'https://hacker-news.firebaseio.com/v0/',
// }

// export function axiosHackerNews(endpoint) {
//   const a = axios.create(axiosConfig)
//   return a.get(endpoint)
// }