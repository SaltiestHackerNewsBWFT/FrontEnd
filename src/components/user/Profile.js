import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useParams, useHistory, Link } from 'react-router-dom';

export default function UserProfile() {

  const { push } = useHistory();
  const { id } = useParams();
  
  const [newProfile, setNewProfile] = useState({
    username: ''
  });

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
    //push('/login')
      setNewProfile(res)
      console.log(newProfile)
      console.log('what is this',res.data)
    })
    .catch(err => console.log({ err }))
  
  .catch((err) => console.log(err));
}

  return (
    <div className='uk-section uk-section-small'>
      <div className='uk-container uk-flex uk-flex-center'>
        <form className='uk-card uk-card-default uk-card-body uk-width-large' onSubmit ={onSubmit}>
          <legend className='uk-text-center uk-text-primary uk-h2'>Profile</legend>
          {/* <div className='uk-margin uk-flex uk-flex-center'>
            <img src='' width='132px' height='132px' alt='profile' style={{border: '2px solid #ff6600', minWidth: '132px', minHeight: '132px'}}/>
          </div>
          <div className='uk-margin'>
            <div className='uk-flex uk-flex-center' data-uk-form-custom>
              <input type='file'/>
              <button className='uk-button uk-button-default uk-button-small' type='button' tabIndex='-1'>Upload Image</button>
            </div>
          </div> */}
          <div className='uk-margin'>
            <label htmlFor='username' className='uk-text-primary'>Username (optional)</label>
            <input 
              className='uk-input'
              name='username'
              type='text'
              values={newProfile}
              onChange ={onChange}
              id='username'
              placeholder='User Name'
            />
          </div>
          <div className='uk-margin'>
            <label htmlFor='email' className='uk-text-primary'>Email</label>
            <input 
              className='uk-input'
              type='email'
              name='email'
              values={newProfile}
              onChange ={onChange}
              id='email'
              placeholder='Email'
            />
          </div>
          <div className='uk-margin'>
            <label htmlFor='password' className='uk-text-primary'>Password</label>
            <input 
              className='uk-input'
              type='password'
              name='password'
              values={newProfile}
              onChange ={onChange}
              id='password'
              placeholder='Password'
            />
          </div>
          <div className='uk-margin-medium'>
            <button className='uk-button uk-button-secondary'>Cancel</button>
            <button className='uk-button uk-button-primary uk-float-right'>Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}
