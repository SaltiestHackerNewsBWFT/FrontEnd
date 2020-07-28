import axios from 'axios';

export const axiosAlgolia = (props) => {
  return (
    axios.get(`http://hn.algolia.com/api/v1/${props}`)
  )
}