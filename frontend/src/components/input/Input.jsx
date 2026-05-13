import React from "react";
import "./input.scss";

const Input = ({ label, type ="text", preDecorator, postDecorator, placeholder="" }) => {
    return (
        <div className="input_container">
            <label className="label-md">{label}</label>
            <div className="input_wrapper">
                {preDecorator ? <span className="decorative_item">{preDecorator}</span> : <></>}
                <input
                    type={type}
                    className="input_field body-md"
                    placeholder={placeholder}
                />
                {postDecorator ? <span className="decorative_item">{postDecorator}</span> : <></>}
            </div>
            <div className="input_error"></div>
        </div>
    );
};

export default Input;
