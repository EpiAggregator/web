/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  email: {
    id: 'app.containers.FormPage.email',
    defaultMessage: 'Email',
  },
  password: {
    id: 'app.containers.FormPage.password',
    defaultMessage: 'Password',
  },
  login: {
    id: 'app.containers.FormPage.login',
    defaultMessage: 'Log In',
  },
  register: {
      id: 'app.containers.FormPage.register',
      defaultMessage: 'Register',
  },
  loginError: {
      id: 'app.containers.FormPage.loginError',
      defaultMessage: 'Log in failed.',
  },
  registerError: {
      id: 'app.containers.FormPage.registerError',
      defaultMessage: 'Registering failed.',
  },
  registerSuccess: {
      id: 'app.containers.FormPage.registerSuccess',
      defaultMessage: 'Registering successful!',
  },
});
