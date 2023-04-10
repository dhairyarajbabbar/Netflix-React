import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';
import React, { useEffect } from 'react';
import Home from "./component/home/home";
import Loginscreen from './component/loginscreen';
import ProfileScreen from './component/profileScreen.jsx';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,}
        ))
      }else{
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  
  return (
    <div className="App">
    <Router>
      {!user?(
        <Loginscreen/>
      ):(
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<ProfileScreen/>} />
        </Routes>
      )

      }
        
    </Router>
    </div>
  );
}
export default App;

  //    <Routes>
  //          <Route path="/" element={!user ? (
  //            <Navigate to ="/login" />
  //              ) : (
  //            <Home/>
  //          )}/>
  //                /* <Route exact path="/home" element={<Home/>} /> */
  //          /* <Navigate to ="/home" /> */
  //          <Route exact path="/Profile" element={<ProfileScreen/>} />
  //          <Route exact path="/login" element={<Loginscreen />} />
  //    </Routes> 