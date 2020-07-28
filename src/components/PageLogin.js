import React, { useState, useEffect } from 'react';

import * as yup from 'yup';

import { LOGIN_FORM_SCHEMA } from '../form-schemas/login-and-signup';

const INITIAL_FORM_STATE = {
  email: '',
  password: '',
}

const INITIAL_ERROR_STATE = {...INITIAL_FORM_STATE};

const DISABLE_FORM_VALIDATION = false; // switch to 'true' to make manual testing faster

export default function PageLogin() {

  const [formState, setFormState] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState(INITIAL_ERROR_STATE);
  const [submitButtonEnabled, setSubmitButtonEnabled] = useState(false);

  useEffect(() => {
    if (DISABLE_FORM_VALIDATION) return;

    LOGIN_FORM_SCHEMA.isValid(formState)
    .then(valid => {
      setSubmitButtonEnabled(valid);
    })
  }, [formState])

  function onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    
    setFormState({...formState, [name]: value})

    if (DISABLE_FORM_VALIDATION) return;

    yup.reach(LOGIN_FORM_SCHEMA, name)
    .validate(value)
    .then(valid => {
      setErrors({
        ...errors,
        [name]: '',
      })
    }).catch(err => {
      setErrors({
        ...errors,
        [name]: err.errors[0],
      })
    })

  }

  function onSubmit(e) {
    e.preventDefault();
  }
  
  return (
    <div className='uk-section uk-section-small'>
      <div className='uk-container uk-flex uk-flex-center'>
        <form className='uk-form-stacked uk-width-medium' onSubmit={onSubmit}>
          <legend className='uk-align-center uk-text-primary'>Log in</legend>
          <div className='form-group'>
            <label className='uk-form-label uk-text-primary' htmlFor='inputEmail'>E-mail address</label>
            <div className='uk-form-controls'>
              <input type='email' name='email' id='inputEmail' onChange={onChange} className='uk-input'/>
            </div>
            <div className='uk-form-label uk-text-danger'>{errors.email}</div>
          </div>
          <div className='form-group'>
            <label className='uk-form-label uk-text-primary' htmlFor='inputPassword'>Password</label>
            <div className='uk-form-controls'>
              <input type='password' name='password' id='inputPassword' onChange={onChange} className='uk-input'/>
            </div>
            <div className='uk-form-label uk-text-danger'>{errors.password}</div>
          </div>
          <div className='form-group'>
            <div className='uk-margin-top'>
  
              <input type='submit' value='Log in' disabled={!submitButtonEnabled} className='uk-button uk-button-primary uk-width-1-1'/>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
