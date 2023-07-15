import React from "react";
import FormValidation from "./Components/FormValidation";
import "./Components/Form.css";
const App=()=>{
    return(
        <div class="container">
            <div class="container-left">
            
        <img src="https://i.ibb.co/FHzGnZN/logo.png" alt="" />
        <p class="desc">Find 3D Objects, Mockups and Illustration here.</p>
        <img src="https://i.ibb.co/Rp2q4Vv/abstraction.png" alt="" class="illustration" />
      </div>
      
      <div class="container-right">
      <div class="wrapper">
          <h1 class="heading">Create Account</h1>
          <div class="social-login">
            <a href="#" class="google">
              <img src="https://i.ibb.co/Mc8r1Z9/google.png" alt="" />
              <span>Sign up with Google</span>
            </a>
            <a href="#" class="facebook">
              <img src="https://i.ibb.co/19Y78qw/facebook.png" alt="" />
              <span>Sign up with Facebook</span>
            </a>
          </div>
          <div class="or">- OR -</div>
          </div>
            <FormValidation/>
            </div>
            
        </div>
    )
}
export default App;