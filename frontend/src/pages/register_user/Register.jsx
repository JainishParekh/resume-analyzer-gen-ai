import React from 'react'
import { Link } from "react-router"

import "./register.scss"
import { Confirm, Password, User, Email, AppLogo } from '../../assets'
import { Button, Input } from '../../components'

const Register = () => {
  return (
    <div className='register_page_container'>
      <div className='register_page_wrapper'>
        <section className='register_page_decoration'>
          <div className='decorative_text_wrapper'>
            <div className='app_logo_wrapper'>
              <span className='app_logo'><AppLogo fill={"#003257"} /></span>
              <span className='app_name heading-sm'>Executive Lens</span>
            </div>
            <p className='decorative_text_main'>Frame Your
              Professional
              Narrative.</p>
            <p className='decorative_sub_text'>
              Step beyond standard recruitment. Join a curated
              platform where career trajectories are analyzed
              through an architectural lens of precision and
              authority.
            </p>
          </div>
        </section>
        <section className='register_page_form'>
          <div className='register_form_wrapper'>
            <div className='register_form_heading_wrapper'>
              <h1 className='register_form_main_heading headline-sm'>
                Create Account
              </h1>
              <div className='register_page_sub_heading'>
                <div className='decorative'>
                </div>
                <h2 className='sub_heading label-md'>
                  Start your architectural career analysis
                </h2>
              </div>
            </div>
            <form className='register_form'>
              <Input label="Full name" placeholder={"Enter full name"} preDecorator={<User />} />
              <Input label="Email address" placeholder={"Enter email"} preDecorator={<Email />} />
              <Input label="password" placeholder='Enter password' preDecorator={<Password />} />
              <Input label="confirm" placeholder='Enter confirm password' preDecorator={<Confirm />} />
              <Button text="Signup" type="submit" />
            </form>
            <div className='register_page_to_login_page'>
              <span>Already have an account? </span>
              <Link to={"../login"} viewTransition>
                <span className='redirection_link'>Log in here</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Register