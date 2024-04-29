import React from 'react'
import FormAuth from './FormAuth';

const SignUp = () => {
  return (
    <>
      <FormAuth
        title={"Sign Up"}
        firstField={"Name"}
        secondField={"Email"}
        thirdField={"Create Password"}
        btnText={"Send"}
        auth={"Already have an Account ?"}
        authText={"Login"}
      />
    </>
  );
}

export default SignUp