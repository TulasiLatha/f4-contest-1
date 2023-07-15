import React,{useState} from "react";

const FormValidation=()=>{
    // let [name,setName]=useState("");
    // let [email,setEmail]=useState("");
    // let [password,setPassword]=useState("");
    // let [confirmpwd,setConfirmpwd]=("");
    let [user,setUser]=useState({name:"",email:"",password:"",confirmpassword:""});
    let [error,setError]=useState("");
    let [success,setSuccess]=useState("");

    function validateForm(event){
        event.preventDefault();
        if(user.name.length<3||user.name.length>30){

             setSuccess("");
             return setError("Name should be min 3 char and max 30 char");
        }
        else if(!user.email.includes("@")||!user.email.includes(".")){
            
            setSuccess("");
             return setError("Email should contain @ and .");

        }
        else if(user.password.length<8 || user.password.length>15){
            
            setSuccess("");
            return setError("password should be min 8 char and max 15 char");
        }
        else if(user.password!==user.confirmpassword){
            
            setSuccess("");
             return setError("password should match");
        }
        setSuccess("User registered successfully");
        setError("");
    }
    return(
        <div class="container-right">
            
            {
                error && <h1>Error is: {error}</h1>

            }
            {success && <h1>Success is: {success}</h1>
}
            <form onSubmit={validateForm}>
            
         <input class="input-group" type="text" 
         placeholder="enter your name" onChange={(event)=>setUser({...user,name:event.target.value})}/>
        
         <input  class="input-group"type="email" placeholder="enter your email" onChange={(event)=>setUser({...user,email:event.target.value})}/>
         <input class="input-group"type="text" placeholder="enter password" onChange={(event)=>setUser({...user,password:event.target.value})}/>
         <input class="input-group"type="text" placeholder="confrim password" onChange={(event)=>setUser({...user,confirmpassword:event.target.value})}/>
         <button type="Submit">Submit</button>
         </form>
        </div>
    )
}
export default FormValidation;