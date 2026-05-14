import React from 'react'
import { Link, useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import "./login.scss"
import { Button, Input } from '../../components'
import { AppLogo, Password, User } from "../../assets"
import { useAuth } from "../../hooks"
import { EMAIL_VALIDATION, PASSWORD_VALIDATION } from '../../constants/formValidation'

const Login = () => {

  const SCHEMA = yup.object({
    email: EMAIL_VALIDATION,
    password: PASSWORD_VALIDATION
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: yupResolver(SCHEMA)
  })

  const {
    loading,
    handleLoginApi
  } = useAuth()

  const navigation = useNavigate()

  const onSubmit = async (data) => {
    await handleLoginApi({ ...data })
    navigation("/", { viewTransition: true })
  }

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
            <form className='login_form' onSubmit={handleSubmit(onSubmit)}>
              <Input label={"email"} errors={errors} register={register} rules={{ required: true }} preDecorator={<User />} placeholder='Enter email' />
              <Input label={"password"} errors={errors} register={register} rules={{ required: true }} type={"password"} preDecorator={<Password />} placeholder='Enter password' />
              <Button disabled={!isValid | loading} text={"Login"} type={'submit'} isLoading={loading} />
            </form>
            <div className='login_page_to_register_page'>
              <span>New to the lens?</span>
              <Link aria-disabled={loading} to={"../register"} viewTransition>
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