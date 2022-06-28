import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./style.css"


const LoginForm = () => {
    const { register, handleSubmit } = useForm();
    const [login, setLogin] = useState({success: false, wrongPass: false});
    let navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        fetch('http://35.201.2.209:8000/login', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }) 
        .then(res=> {
            console.log(res)
            if(res.status == 200) {
                setLogin({success:true});
                navigate("../device", { replace: true });
            } else {
                setLogin({wrongPass: true});
            }
        })
    };
    return (
        <div className="loginForm-wrapper">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Login</h2>
                <input type="email" {...register("email", { required: true })} placeholder="Login"/>
                <input type="password" {...register("password", { required: true })} placeholder="Password"/>
                { login.success && <p>login Success</p> }
                { login.wrongPass && <p>Your Password Will  be Wrong</p> }
                <input className="loginForm__submit" type="submit" />
            </form>
       </div>
    );
};

export default LoginForm;