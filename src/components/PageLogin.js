import React from 'react';

export default function PageLogin() {

  function onSubmit(e) {
    e.preventDefault();
  }
  
  return (
    <div className='uk-container uk-container-center'>
      <form className='uk-form-stacked' onSubmit={onSubmit}>
      <div className='form-group'>
          <label className='uk-form-label' for='inputEmail'>E-mail address</label>
          <div className='uk-form-controls'>
            <input type='email' name='email' id='inputEmail' className='uk-input'/>
          </div>
        </div>
        <div className='form-group'>
          <label className='uk-form-label' for='inputPassword'>Password</label>
          <div className='uk-form-controls'>
            <input type='password' name='password' id='inputPassword' className='uk-input'/>
          </div>
        </div>
        <div className='form-group'>
          <input type='submit' value='Log in' className='uk-button uk-button-primary uk-width-1-1'/>
        </div>
      </form>
    </div>
  )
}
