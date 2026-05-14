import React from "react";
import "./input.scss";

const Input = ({ label, register, rules, errors, type = "text", preDecorator, postDecorator, placeholder = "" }) => {
    return (
        <div className="input_container">
            <label htmlFor={label} className="label-md">{label}</label>
            <div className="input_wrapper">
                {preDecorator ? <span className="decorative_item">{preDecorator}</span> : <></>}
                <input
                    type={type}
                    className="input_field body-md"
                    placeholder={placeholder}
                    {...register(label, { ...rules })}
                />
                {postDecorator ? <span className="decorative_item">{postDecorator}</span> : <></>}
            </div>
            {errors && errors[`${label}`] && errors[`${label}`].message && <div className="input_error">{errors[`${label}`].message}</div>}
        </div>
    );
};

export default Input;
