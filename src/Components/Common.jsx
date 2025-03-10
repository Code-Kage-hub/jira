import React from "react";

export function InputField({type,placeholder, ...rest}){
    return <input type={type} placeholder={placeholder} {...rest} className="ipt"/>
}

export function ButtonField({label}){
    return <button className="btn">{label}</button>
}