import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Header from './header/header';
import './profilescreen.scss';
const imgurl="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";
function ProfileScreen() {
  const plan=null;
  const user=useSelector(selectUser);
//   const dispatch=useDispatch;
  return (
    <div className='profilescreen'>
        <Header/>
        <div className="profilescreen_body">
            <h1>Edit Profile</h1>
            <div className="profilescreendata">
                <img src={imgurl} alt="logo" />
                <div className="profilescreen_matter">
                    <h2>{user.email}</h2>
                    <h3>Plans (Current Plan: {plan})</h3>
                    <button className='signout_button' onClick={()=>{ auth.signOut(); }} >Sign out</button>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default ProfileScreen;
