import React from 'react'
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { useState } from 'react';
import '../style/LoginPage.css';
import axios from 'axios';
function Regiter() {

  const [hrDetails, setHrDetails] = useState({
    companyName: "",
    email: "",
    password1: "",
    password2: ""
  });


  function handleDescriptionChange(event){
    const value = event.target.value
    const name=event.target.name
    setHrDetails((prev)=>{
        return {
            ...prev,
            [name]: value
        }
    })
   }


   function formSubmit(event){
    event.preventDefault();

    if(hrDetails.companyName.trim() !== "" && hrDetails.email.trim() !== "" && hrDetails.password1.trim() !== "" && hrDetails.password2 === hrDetails.password1 ){
    
      
      axios.post('http://localhost:4000/users/register', {username:"shyam"}).then(res => {

        console.log(res);

       }).catch(err=>{
         console.log(err);
       })

    }else{
      
      


    }

    
  
    
  }


  return (

    <div className='login'>
        <div className='container'>
          <div className='left'>
            <img className='logoo' src='./images/logo.png' alt='nono' />
            <div className='textarea'>
              <h1>Hire from</h1>
              <h1 className='clgnm'>IIT ISM Dhanbad</h1>
            </div>
          </div>
          <div className='right'>
            <div className='loginbox registerbox'>
              <div className='signintext'>
                <h1>Register</h1>
              </div>
              <div className='formdiv'>
                <form onSubmit={formSubmit}>
                  <div className='formform'>
                    <Input className='textfield1'
                      placeholder="Company  name"
                      onChange = {handleDescriptionChange}
                      value={hrDetails.companyName}
                      name="companyName"
                    />
                    
                    <Input className='textfield1' 
                    placeholder="email id" 
                    onChange = {handleDescriptionChange}
                    value={hrDetails.email}
                    name="email"
                    />

                    <Input className='textfield1' 
                    placeholder="password"
                    type='password' 
                    onChange = {handleDescriptionChange}
                    value={hrDetails.password1}
                    name="password1"
                    />
                    
                    <Input className='textfield1' 
                    placeholder="Comfirm Password" 
                    type='password' 
                    onChange = {handleDescriptionChange}
                    value={hrDetails.password2}
                    name="password2"
                    />

                  </div>
                  <div className='formform'>
                    <Button type='submit' className='textfield2' variant="contained">Register</Button>
                  </div>
                </form>
              </div>


            </div>
          </div>
        </div>
    </div>
  )
}

export default Regiter