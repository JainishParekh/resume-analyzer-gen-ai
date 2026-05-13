import React from 'react'
import { Link } from "react-router"
import "./login.scss"
import { Button, Input } from '../../components'
import { AppLogo, Password, User } from "../../assets"

const Login = () => {
  return (
    <div className='login_page_container'>
      <div className='login_page_wrapper'>
        <section className='login_page_decorative'>
          <div className='login_page_decorative_container'>
            <div className='app_logo_wrapper'>
              <span className='app_logo'><AppLogo fill={"#003257"} /></span>
              <span className='app_name heading-sm'>Executive Lens</span>
            </div>
            <div className='login_page_decorative_wrapper'>
              <div className='decorative_text_wrapper'>
                <p className='decorative_text'>
                  Elevate your professional narrative.
                </p>
              </div>
              <div className='tag_line_wrapper'>
                <p className='tag_line'>THE ARCHITECTURAL EDITOR</p>
              </div>
            </div>
          </div>
        </section>
        <section className='login_page_form'>
          <div className='login_form_wrapper'>
            <div className='login_form_heading_wrapper'>
              <h1 className='login_form_main_heading headline-sm'>
                Welcome Back
              </h1>
              <div className='login_page_sub_heading'>
                <div className='decorative'>
                </div>
                <h2 className='sub_heading label-md'>
                  ACCESS YOUR LENS
                </h2>
              </div>
            </div>
            <form className='login_form'>
              <Input label={"Email"} preDecorator={<User />} placeholder='Enter email' />
              <Input label={"Password"} type={"password"} preDecorator={<Password />} placeholder='Enter password' />
              <Button text={"Login"} type={'submit'} />
            </form>
            <div className='login_page_to_register_page'>
              <span>New to the lens?</span>
              <Link to={"../register"} viewTransition>
                <span className='redirection_link'>Create a Premium Account</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Login