import React from 'react'
import { Link, useNavigate } from "react-router"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";

import "./register.scss"
import { Confirm, Password, User, Email, AppLogo } from '../../assets'
import { Button, Input } from '../../components'
import { useAuth } from '../../hooks'
import { confirmPasswordValidation, EMAIL_VALIDATION, PASSWORD_VALIDATION } from '../../constants/formValidation'

const Register = () => {

  const SCHEMA = yup.object({
    email: EMAIL_VALIDATION,
    password: PASSWORD_VALIDATION,
    confirm: confirmPasswordValidation("password"),
    username: yup.string().required("Username is required").min(4, "Username must have at least 4 characters")
  })

  const {
    loading, handleRegisterApi
  } = useAuth()

  const navigation = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { errors, isValid }
  } = useForm({
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirm: ""
    },
    resolver: yupResolver(SCHEMA)
  })

  const onSubmit = async (data) => {
    await handleRegisterApi({ email: data.email, username: data.username, password: data.password })
    navigation("/", { viewTransition: true })
  }

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
            <form className='register_form' onSubmit={handleSubmit(onSubmit)}>
              <Input register={register} errors={errors} label="username" placeholder={"Enter full name"} preDecorator={<User />} />
              <Input register={register} errors={errors} label="email" placeholder={"Enter email"} preDecorator={<Email />} />
              <Input register={register} errors={errors} type="password" label="password" placeholder='Enter password' preDecorator={<Password />} />
              <Input register={register} errors={errors} type="password" label="confirm" placeholder='Enter confirm password' preDecorator={<Confirm />} />
              <Button text="Signup" type="submit" disabled={!isValid | loading} />
            </form>
            <div className='register_page_to_login_page'>
              <span>Already have an account? </span>
              <Link aria-disabled={loading} to={"../login"} viewTransition>
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