import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useParams, useHistory, Link } from 'react-router-dom'
import ProfileCard from './ProfileCard'

const UserProfile=(props)=> {
  const {push} = useHistory()
  const {id}= useParams()
  
const [newProfile, setNewProfile] = useState({

  username:''
})

useEffect(()=>{
  axiosWithAuth().get('https://hackernewsbw31.herokuapp.com/api/profile/profile')
  .then(res =>{
    console.log('what is this profile', res.data.jwt)
    setNewProfile(res.data.jwt)
  })
},[])

const onChange = (e) => {
  setNewProfile({...newProfile, [e.target.name]: e.target.value})
}


function onSubmit(e) {
  e.preventDefault();
  const profileReg = { username: newProfile.username, email: newProfile.email};
  axiosWithAuth()
  .put(`https://hackernewsbw31.herokuapp.com/api/profile/${newProfile.subject}`, profileReg)
    .then(res => {
  push('/login')
      console.log('what is ths',res.data)
    })
    .catch(err => console.log({ err }))
  
  .catch((err) => console.log(err));
}

// 

return (
    <div className='uk-section uk-section-small'>
      <div className='uk-container uk-flex uk-flex-center'>
        <form onSubmit ={onSubmit} className='uk-card uk-card-default uk-card-body uk-width-large'>
          <legend className='uk-text-center uk-text-primary uk-h2'>Profile</legend>
          <div className='uk-margin uk-flex uk-flex-center'>
            <img src='' width='132px' height='132px' alt='profile' style={{border: '2px solid #ff6600', minWidth: '132px', minHeight: '132px'}}/>
          </div>
          <div className='uk-margin'>
            <div className='uk-flex uk-flex-center' data-uk-form-custom>
              <input type='file'/>
              <button className='uk-button uk-button-default uk-button-small' type='button' tabIndex='-1'>Upload Image</button>
            </div>
          </div>
          <div className='uk-margin'>
            <label forhtml='username' className='uk-text-primary'>User Name</label>
            <input 
            type='text'
              className='uk-input'
              name='username'
              values={newProfile}
              onChange ={onChange}
              placeholder='User Name'
            />
          </div>
          <div className='uk-margin'>
            <label forhtml='email' className='uk-text-primary'>Email</label>
            <input 
              className='uk-input'
              name='email'
              values={newProfile}
              onChange ={onChange}
              placeholder='Email'
            />
          </div>
          
          
          <div className='uk-margin-medium'>
            
            <button type="submit" className='uk-button uk-button-primary uk-float-right'>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserProfile