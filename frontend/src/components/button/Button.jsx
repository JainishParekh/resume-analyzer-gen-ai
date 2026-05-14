import React from 'react'

import "./button.scss";
import Loader from "../../assets/Loader";

const Button = ({ text = "Click here", preDecorator, postDecorator, onClick = (e) => { }, type = "button", isLoading = false, disabled=false }) => {
    return (
        <div className='btn_container'>
            <button disabled={disabled} type={type} className='btn_primary'>
                {isLoading ?
                    <><Loader type="button" width={"64"} height={"24"} /></>
                    :
                    <>
                        {preDecorator ? <span className='btn_prefix_decor'>{preDecorator}</span> : <></>}
                        <span className='btn_text'>{text}</span>
                        {postDecorator ? <span className='btn_suffix_decor'>{postDecorator}</span> : <></>}
                    </>

                }
            </button>
        </div>
    )
}

export default Button