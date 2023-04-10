import React, { useState } from 'react'
// import {Link} from "react-router-dom"
import "./loginscreen.scss"
import Header from './header/header';
import { LoginscreencontentonSignup } from './loginscreencontentonSignup'
export function  Loginscreen() {
    const [signin, setsignin]=useState(false);
    // function setunsign(){
    //     setsignin(false);
    // }
  return (
    <div className='loginscreen_background' >
            <div className="fade">
            <Header/>
                { signin ? (
                    <LoginscreencontentonSignup />
                )
                :(
                    <div className='signinscreencontent'>
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className='loginscreeninput'>
                            {/* <form action="post"> */}
                                <input type="email" placeholder='Email adress' />
                                <button onClick={()=>setsignin(true)}>Get Started </button>
                            {/* </form> */}
                        </div>

                    </div>
                ) 
            }

            </div>
    </div>
  )
}

export default Loginscreen