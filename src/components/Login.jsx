import React from "react";
import Input from "./Input";


function Login(props) {
return (
    <form className="form">
    <Input
        type="Text"
       placeholder="Username"
    />
    <Input
        type="Password"
       placeholder="Password"
       />
       {!props.isRegistered && (
         <Input type={props.passowrd} placeholder="confirm Password"/>
       )}
   
    <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>  
</form>
)

}

export default Login;