import React from 'react';
import { Link } from 'react-router-dom';
import UpdateProfile from'./UpdateProfile'


const ProfileCard =(props) => {
  const {profile} = props

  return (
    <div className='uk-section uk-section-small'>
      <div className='uk-container uk-flex uk-flex-center'>
        <form  className='uk-card uk-card-default uk-card-body uk-width-large'>
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
            <label forhtml='email' className='uk-text-primary'>User Name:  {profile.username}</label>
            
          </div>
          <div className='uk-margin'>
            <label forhtml='email' className='uk-text-primary'>Email: {profile.email}Email</label>
            
          </div>
          
          <div className='uk-margin-medium'>
            <button className='uk-button uk-button-secondary'>Cancel</button>
            <Link to='/user/updateprofile'>
            <button className='uk-button uk-button-primary uk-float-right' >Update</button>
            </Link>
          </div>
        </form>
        {/* < UpdateProfile profile={props}/> */}
      </div>
    </div>
  )
}

export default ProfileCard