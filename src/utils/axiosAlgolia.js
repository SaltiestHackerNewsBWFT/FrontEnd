import axios from 'axios';

export const axiosAlgolia = (props) => {
  return (
    axios.get(`https://hn.algolia.com/api/v1/${props}`)
  )
}