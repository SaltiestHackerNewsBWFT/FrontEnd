import * as yup from 'yup';

const loginFormShape = {
  email: yup
  .string()
  .email('You must type in a valid e-mail address to log in.')
  .required('You must type in your e-mail address to log in.'),
  password: yup
  .string()
  .required('You must type in your password to log in.')
  .min(2, 'Passwords must be at least two characters long.')
}

export const LOGIN_FORM_SCHEMA = yup.object().shape(loginFormShape)

const signupFormShape = {
  ...loginFormShape,
  passwordAgain: yup
  .string()
  .required('You must type your password in again.')
  .oneOf([yup.ref('password')], 'Your passwords must match.')
}

export const SIGNUP_FORM_SCHEMA = yup.object().shape(signupFormShape);
