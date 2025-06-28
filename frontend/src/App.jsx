import { Routes,Route, Navigate} from 'react-router-dom';
import'./App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import SettingsPage from './components/SettingsPage';
import ProfilePage from './components/ProfilePage';
import { axiosInstance } from './lib/axios';
import { Loader } from 'lucide-react';
import { useAuthStore } from './store/useAuthStore';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useThemeStore } from './store/useThemeStore';

function App() {
 const {authUser,checkAuth,isCheckingAuth,onlineUsers}=useAuthStore();
 const {theme}=useThemeStore();
 
 console.log("onlineUsers",onlineUsers);


 useEffect(()=>{
  checkAuth();
 },[checkAuth]);
console.log({authUser});

if(isCheckingAuth && !authUser) return(
<div className='flex items-center justify-center h-screen'>
  <Loader className='size-10 animate-spin'></Loader>
</div>
)
 return (
<div data-theme={theme} >
<Navbar />
<Routes>
  <Route path="/" element={ authUser? <HomePage/>: <Navigate to="/login"/>}/>
  <Route path="/signup" element={!authUser ? <SignUpPage/>: <Navigate to="/"/>}/>
  <Route path="/login" element={!authUser ? <LoginPage/>: <Navigate to="/"></Navigate>}/>
  <Route path="/settings" element={ <SettingsPage/>}/>
  <Route path="/profile" element={authUser? <ProfilePage/>: <Navigate to="/login"/> }/>


</Routes>

<Toaster/>
</div>
  )
}

export default App
