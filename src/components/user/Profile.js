import React, {useState, useEffect} from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import ProfileCard from  './ProfileCard'

const Profile = (props) => {
  const params = useParams()
  const {push} = useHistory()
  const [profile, setProfile] = useState([])
console.log(useHistory())

useEffect(()=>{
  axiosWithAuth().get(`https://hackernewsbw31.herokuapp.com/api/profile/profile`)
.then(res =>{
    console.log('what is this profile', res.data)
    setProfile(res.data.jwt)
  })
},[])

return (

  <div>
        <ProfileCard profile= {profile}  />
   </div>
  
)
}



export default Profile