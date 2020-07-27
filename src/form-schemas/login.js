import * as yup from 'yup';

const LOGIN_FORM_SCHEMA = yup.object().shape({
  email: yup
  .string()
  .email('You must type in a valid e-mail address to log in.')
  .required('You must type in your e-mail address to log in.'),
  password: yup
  .string()
  .required('You must type in your password to log in.')
  .min(2, 'Passwords must be at least two characters long.')
})

export default LOGIN_FORM_SCHEMA;
