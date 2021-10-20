import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const {setEmail, setPassword, signInWithPass,googleSignIn,setIsLoading} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            history.push(redirect_uri)
            console.log(result.user)
        })
        .catch(error => console.error(error.message))
        .finally(()=> setIsLoading(false))
    }
    const handleSignIn = () => {
        signInWithPass()
        .then(userCredential => {
            history.push(redirect_uri)
            console.log(userCredential.user)
        })
        .catch(error => console.error(error.message))
        .finally(() => setIsLoading(false))
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    } 
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignIn();
    }
    return (
        <div className="bg-lightGreen">
            <div className="w-full flex items-center justify-center bg-gray-800">
                <form className="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center" onSubmit={handleSubmit}>
                    <label className="font-light text-4xl mb-4 sand">Med<span className="font-bold">city</span></label>
                    <input type="text" className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" placeholder="Email" onBlur={handleEmail}/>
                    <input type="password" className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4" placeholder="Password" onBlur={handlePassword}/>
                    <button className="w-full h-12 rounded-lg bg-darkBlue text-white uppercase font-semibold hover:bg-blue-700 text-gray-100 transition mb-4" type="submit">Login</button>
                    <Link to="/register"><button className="sand text-lg font-semibold"> New Here? Click here to Register!</button></Link>
                    <label className="text-gray-800 mb-4">or</label>
                    <button className="w-full h-12 rounded-lg bg-darkBlue text-white uppercase font-semibold hover:bg-red-700 text-gray-100 transition mb-4" onClick={handleGoogleSignIn} >Sign with Google</button>
                </form>
            </div>
        </div>
    );
};

export default Login;