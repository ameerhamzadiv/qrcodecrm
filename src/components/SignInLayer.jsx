import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { Link } from "react-router-dom";


const SignInLayer = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);
  
    const togglePasswordVisibility = () => {
          setPasswordVisible(!passwordVisible);
      };
 

  return (
    <section className='auth bg-base d-flex flex-wrap'>
      <div className='auth-left d-lg-block d-none'>
        <div className='d-flex align-items-center flex-column h-100 justify-content-center'>
          <img src='assets/images/login.png' alt='' />
        </div>
      </div>
      <div className='auth-right py-32 px-24 d-flex flex-column justify-content-center' style={{"boxShadow": "-1px 1px 4px 0px rgb(0 0 0 / 12%)"}}>
        <div className='max-w-464-px mx-auto w-100'>
          <div>
            <Link to='#' className='mb-40 max-w-290-px'>
            <img src='/assets/images/logo.png' alt='site logo' style={{"width": "50%"}} />
            
              
            </Link>
            <h4 className='mb-12'>Sign In to your Account</h4>
            <p className='mb-32 text-secondary-light text-lg'>
              Welcome back! please enter your detail
            </p>
          </div>
          <form method="get" action="/create-qrcode" >
            <div className='icon-field mb-16'>
              <span className='icon top-50 translate-middle-y'>
                <Icon icon='mage:email' />
              </span>
              <input
                type='email'
                
                className='form-control h-56-px bg-neutral-50 radius-12'
                placeholder='Email'
                required
              />
            </div>
            <div className='position-relative mb-20'>
              <div className='icon-field'>
                <span className='icon top-50 translate-middle-y'>
                  <Icon icon='solar:lock-password-outline' />
                </span>
                <input
                  type={passwordVisible ? "text" : "password"}
                  className='form-control h-56-px bg-neutral-50 radius-12'
                  id='your-password'
                  placeholder='Password'
                  required
                />
              </div>
              <span
                className={`toggle-password ${passwordVisible ? "ri-eye-off-line" : "ri-eye-line"} cursor-pointer position-absolute end-0 top-50 translate-middle-y me-16 text-secondary-light`}
                data-toggle='#your-password' onClick={togglePasswordVisibility}
              />
            </div>
            <div className=''>
              <div className='d-flex justify-content-between gap-2'>
                <div className='form-check style-check d-flex align-items-center'>
                  <input
                    className='form-check-input border border-neutral-300'
                    type='checkbox'
                    defaultValue=''
                    id='remeber'
                  />
                  <label className='form-check-label' htmlFor='remeber'>
                    Remember me{" "}
                  </label>
                </div>
                
              </div>
              
            </div>
            <button
              type='submit'
              className='btn btn-primary text-sm btn-sm px-12 py-16 w-100 radius-12 mt-32'
            >
              {" "}
              Sign In
            </button>
            
            
            
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignInLayer;
