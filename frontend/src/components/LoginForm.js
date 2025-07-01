import React from 'react'
import './LoginForm.css'
import logo from '../assets/Logo.png'
import {Link, useNavigate} from "react-router-dom"
import { useState} from 'react'
import axios from 'axios'

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showError, setShowError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = () => {
        console.log("email : " + email + "  password: " + password)
        axios.post("http://localhost:5001/api/users/login", {
                email: email,
                password: password
        }).then(response =>  {
            const accessToken = response.data.accessToken
            //TODO: Store accessToken using HTTP Only cookies. Video : https://www.youtube.com/watch?v=a5Krfkfl9MM
            navigate('/dashboard')
        }).catch(error => {
            if (error.response && error.response.status === 401) {
                setShowError(true)
            }
            //TODO: Create error page and redirect user there. (Simple page saying "Uh oh, and error occurred, please refresh and try again")
        })
    }

    return(
        <div className='login-form'>
            <div className='login-main-area'>
                <img src={logo} alt="Logo" className="login-logo"/>
                <p className='sign-up-text'>Welcome Back</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input value = {email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" required/>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input value = {password} onChange={(e)=>setPassword(e.target.value)}type="password" id="password" required/>
                    </div>
                    {showError && (<p style={{ color: "#D64545" }}>Invalid username or password, please try again</p>)}
                    <button type="submit">Sign In</button>
                </form>
            </div>
            <p>
            New to Money Management?
            <Link to = "/signup">
                Join now
            </Link>
            </p>
        </div>
    )
}
