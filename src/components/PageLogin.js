import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

import * as yup from 'yup';

import './PageAuthForm.css';
import '../assets/images/salt-in-white-surface-3693296.jpg'

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
  const history = useHistory();

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
    const userLogin = { email: formState.email, password: formState.password };
    axios.post("https://hackernewsbw31.herokuapp.com/api/auth/login", userLogin)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        //localStorage.setItem("userID", res.data.data.id);
        history.push("/");
        console.log('what is ths',res.data)
      })
      .catch(err => console.log({ err }))
    

    // axios.post("https://hackernewsbw31.herokuapp.com/api/auth/login", signInUser)
    //   .then((res) => {
    //     console.log(res);
    //     localStorage.setItem("userID", res.data.id);
    //     localStorage.setItem("token", res.data.token);
    //     history.push('/')
    //   })
    //   .catch((err) => console.log(err));
  }
  
  return (
    <div className='auth-form-page'>
      <div className='auth-form-page__image'>
        {/* purely æsthetic background image */}
      </div>
      <div className='auth-form-page__form'>
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
              <div className='uk-margin uk-text-center'>
                <Link to='/signup'>Need Account?</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
