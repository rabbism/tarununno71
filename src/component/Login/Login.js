import React from 'react';
import log from '../../images/tarunno.png'
const Login = () => {
    return (
        <div>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <div>
                    <h2>Login With</h2>
                    <a href="#"> Continue with Google</a>
                    <h4>Don't have an acount?<a href='#'>Create an account</a></h4>
                </div>
            </div>
        </div>
    );
};

export default Login;