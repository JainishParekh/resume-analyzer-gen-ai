import React from 'react'

import "./button.scss";

const Button = ({ text = "Click here", preDecorator, postDecorator, onClick=(e) => {}, type="button" }) => {
    return (
        <div className='btn_container'>
            <button type={type} className='btn_primary'>
                {preDecorator ? <span className='btn_prefix_decor'>{preDecorator}</span> : <></>}
                <span className='btn_text'>{text}</span>
                {postDecorator ? <span className='btn_suffix_decor'>{postDecorator}</span> : <></>}
            </button>
        </div>
    )
}

export default Button