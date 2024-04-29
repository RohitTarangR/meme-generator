import React from 'react'
import FormAuth from './FormAuth'


const Login = () => {
  return (
    <>
      <FormAuth
        title={"Login"}
        firstField={"Name"}
        secondField={"Email"}
        thirdField={"Password"}
        btnText={"Send"}
        auth={"Can't have Account ?"}
        authText={"SignUp"}
      />
    </>
  );
}

export default Login