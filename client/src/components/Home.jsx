import React from 'react'
import { useCookies } from "react-cookie";
import Login from './Login';

const Home = () => {
    const [cookies, setCookie] = useCookies(["user"]);

    return (
        <>
            {cookies.token === undefined ? <Login /> :
                <div className="home d-flex justify-content-center align-items-center">

                    <div className='main p-3 rounded'>
                        <p>submit text</p>
                        <input type="text" name='submittext' value={cookies && cookies.user.name} className="form-control mb-3" />
                        <button type="submit" className="btn btn-primary bt-3" >submit</button>
                        <p>search text</p>
                        <input type="text" name='searchtext' value={cookies && cookies.user.name} className="form-control mb-3" />
                        <button type="submit" className="btn btn-primary bt-3" >search</button>
                        <p>Show search text message hear text</p>
                        <textarea type="password" name='password' value={cookies && cookies.user.name} className="form-control mb-3"  > </textarea>
                        <button type="submit" className="btn btn-primary bt-3" >clear all</button>
                        <button type="submit" className="btn btn-outline-primary m-3" >Logout</button>
                    </div>

                </div>
            }

        </>
    )
}

export default Home