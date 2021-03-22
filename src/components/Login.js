import React from 'react';

const Login = () => (
  <section className='login'>
    <form className='form'>
      <h2>Sign in</h2>
      <input className='textBox' type='email' id='email' name='email'/>
      <input className='textBox' type='password' id='password' name='password'/>
    </form>
  </section>
);

export default Login;