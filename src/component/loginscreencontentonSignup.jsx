import React, { useRef } from 'react'
import {Link} from "react-router-dom"
import {auth}  from '../firebase.js'
import "./loginscreeno_click_signup.scss"
// import  signin form ./loginscreen;
export function LoginscreencontentonSignup()  {
    const emailref=useRef(null);
    const passwordref=useRef(null);
    const register=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value
        ).then((authUser)=>{
            // console.log(authUser);
        }).catch(error=> {
            alert(error.message);
        });
    };
    const signIn=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value
            ).then((authUser)=>{
                console.log(authUser);
            }).catch(error=>{
                alert(error.message);
            });
    }
  return (
    <div className='loginpagecontent'>
        <form action="" method="post">
            <h1>Sign In</h1>
            <input ref={emailref} type="email" placeholder='Email' className='emailinput'/>
            <input ref={passwordref} type="password" placeholder='Password' className='passwordinput'/>
            <button  onClick={signIn} style={{scale:0.9}} className='loginscreenbutton'>Sign In</button>
            <p>
                <span className='signupnowtext'>New to Netflix? </span> 
                <Link id="link_Styles" to="/" >
                    <span onClick={register} className='signupnowunderlined' > Sign up now.</span> 
                </Link>
            </p>
        </form>
    </div>
  )
}
