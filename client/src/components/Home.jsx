import React, { useState } from 'react'
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const Home = () => {
    const [cookies, setCookie,removeCookie] = useCookies([]);
    const [data, setData] = useState('');
    const [searchData, setSearchData] = useState('');
    const [cookiesValue, setCookiesValue] = useState('');

    const navigate = useNavigate();

    const setDataInCookies = _ => {
        let cookiesData = cookies.data === undefined ? '' : cookies.data;

        cookiesData = cookiesData + data;

        setCookie('data',cookiesData);
        setData('')
    }

    const search = _ => {
        if(cookies.data === undefined ) return setCookiesValue('');

        setCookiesValue(cookies.data.includes(searchData));
    }

    return (
        <>
            {cookies.token === undefined ? <Login /> :
                <div className="home d-flex justify-content-center align-items-center">

                    <div className='main p-3 rounded'>
                        <p>submit text</p>
                        <input type="text" onChange={(e) => {setData(e.target.value)}}  value={data} className="form-control mb-3" />
                        <button type="submit" className="btn btn-primary bt-3" onClick={()=>{setDataInCookies()}} >submit</button>
                        <p>search text</p>
                        <input type="text" name='searchtext' onChange={(e)=>{setSearchData(e.target.value)}} className="form-control mb-3" />
                        <button type="submit" className="btn btn-primary bt-3" onClick={()=>{search()}} >search</button>
                        <p>Show search text message hear text</p>
                        <textarea type="password" name='password' value={cookiesValue} className="form-control mb-3"  > </textarea>
                        <button type="submit" className="btn btn-primary bt-3" onClick={()=>{removeCookie('data')}}>clear all</button>
                        <button type="submit" className="btn btn-outline-primary m-3" onClick={() => { removeCookie('token'); navigate('/login') }}>Logout</button>
                    </div>

                </div>
            }

        </>
    )
}

export default Home