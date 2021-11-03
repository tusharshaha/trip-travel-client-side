import React from 'react';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import useAuth from '../../hooks/useAuth'
import './Login.css'
import { useHistory, useLocation } from 'react-router-dom';
const Login = () => {
    const { googleSignIn,setUser,setError,setIsLoading } = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            setUser(result.user)
            history.push(redirect_uri)
        })
        .catch(error => setError(error.message))
        .finally(() => setIsLoading(false))
    }
    return (
        <>
            <Header></Header>
            <div className='login-form'>
                <div className='google-login'>
                    <h3>Sign In With Google</h3>
                    <button className='singin-btn' onClick={handleGoogleSignIn}><i className="fab fa-google fa-2x"></i> Google Sign In </button>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;