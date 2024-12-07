import React,{useState} from 'react';
import './CSS/Loginsignup.css'


const LoginSignUp = () => {

  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({
    usename:"",
    password:"",
    email:"",
  })
  const changeHandler =(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  const login = async ()=>{
  console.log("login function executed",formData);
  let responseData;
  await fetch('http://localhost:4000/login',{
    method:'POST',
    headers:{
      Accept:'application/form-data',
      'Content-Type':'application/json',
    },
    body: JSON.stringify(formData),
  }).then((response)=>response.json()).then((data)=>responseData=data) 
  if(responseData.success){
    localStorage.setItem('auth-token',responseData.token);
    window.location.replace("/");
  } 
  else{
    alert(responseData.errors);
  }
  }
  const signup = async ()=>{
    console.log("signup function executed",formData); 
    let responseData;
    await fetch('http://localhost:4000/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data) 
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    } 
    else{
      alert(responseData.errors);
    }
    
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
         {state==="Sign Up"?<input type="text" name = 'username'onChange={changeHandler} placeholder='Your Name' />:<></>} 
          <input name ='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
          <input type="password" name ="password" value={formData.password} onChange={changeHandler} placeholder='Password' />

        </div>
        <button onClick={()=>{state==="Login" ? login():signup()}}>Continue</button>
        {state==="Sign Up"? <p className="loginsignup-login">
          Already have an account <span onClick={()=>{setState("Login")}} >Login here</span> </p>:<p className="loginsignup-login">
                Create an account <span onClick={()=>{setState("Sign Up")}}>Click here</span> </p>
}
          
          <div className="loginsignup-agree"><input type="checkbox"  />
          <p>By continuing to use i agree to terms and privacy policy </p></div>
       
      </div>
      
    </div>
  )
}

export default LoginSignUp