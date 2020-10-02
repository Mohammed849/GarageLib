import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
export default class Login extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4'>
            <form>
              <div className='form-group text-left '>
                <label>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
              </div>
              <div className='form-group text-left'>
                <label>Password</label>
                <input
                  type='password'
                  className='form-control'
                  id='password'
                  placeholder='Password'
                />
              </div>
              <button type='submit' className='btn btn-primary'>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
