import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

export default class Contact extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center '>
          <div className='col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4'>
            <form>
              <div className='form-group text-left '>
                <label>Firstname</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Firstname'
                />
              </div>
              <div className='form-group text-left'>
                <label>Lastname</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Lastname'
                />
              </div>
              <div className='form-group text-left'>
                <label>Telephone</label>
                <input
                  type='tel'
                  className='form-control'
                  placeholder='your phone number'
                />
              </div>
              <div className='form-group text-left'>
                <label>Address</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='your address'
                />
              </div>
              <div className='form-group text-left'>
                <label>Postal</label>
                <input
                  type='numbre'
                  className='form-control'
                  placeholder='your Postal'
                />
              </div>
              <div className='form-group text-left'>
                <label>City</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='example : Paris'
                />
              </div>
              <div className='form-group text-left'>
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
              <div className='form-group text-left'>
                <label>Confirm Password</label>
                <input
                  type='password'
                  className='form-control'
                  id='confirmPassword'
                  placeholder='Confirm Password'
                />
              </div>
              <button type='submit' className='btn btn-primary'>
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
