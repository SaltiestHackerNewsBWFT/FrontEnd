import React from 'react';

export default function PageLogin() {

  function onSubmit(e) {
    e.preventDefault();
  }
  
  return (
    <>
      <form className='uk-form-stacked' onSubmit={onSubmit}>
      <div class='form-group'>
          <label className='uk-form-label' for='inputEmail'>E-mail address</label>
          <div className='uk-form-controls'>
            <input type='email' name='email' id='inputEmail' className='uk-input'/>
          </div>
        </div>
        <div class='form-group'>
          <label className='uk-form-label' for='inputPassword'>Password</label>
          <div className='uk-form-controls'>
            <input type='password' name='password' id='inputPassword' className='uk-input'/>
          </div>
        </div>
      </form>
    </>
  )
}
