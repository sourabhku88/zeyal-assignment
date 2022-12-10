import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from "react-cookie";
import axios from 'axios'


const Login = () => {
    const [inputData, setInputData] = useState({ email: '', password: '' });
    const [cookies, setCookie] = useCookies([]);
    const  navigate = useNavigate()
    
    const inputHendler = e => setInputData({ ...inputData, [e.target.name]: e.target.value });

    const submit = async e => {
        e.preventDefault()
        try {
            const  { data } = await axios.post(`http://localhost:3002/login`,inputData);
            alert('login');
            setCookie("user", data.message , {path: "/"});
            setCookie("token",data.token, {path: "/"});
            setInputData({ email: '', password: '' });
            navigate('/');
        } catch (error) {
            console.log(error);
            alert(error.response.data.message);
       }
    }
    return (
        <>
            <div className="login d-flex justify-content-center align-items-center">
                <form onSubmit={(e)=>{submit(e)}} className='d-flex justify-content-center align-items-center p-5 rounded flex-column w-25'>
                    <input type="email" name='email' value={inputData.email} onChange={inputHendler} placeholder='Enter Your Email' className="form-control mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <input type="password" name='password' value={inputData.password} onChange={inputHendler} placeholder='Enter Your Password' className="form-control mb-3" id="exampleInputPassword1" />
                    <button type="submit" className="btn btn-primary bt-3" >Submit</button>
                    <Link to='/signup'> I Don't have Account </Link>
                </form>
            </div>
        </>
    )
}

export default Login