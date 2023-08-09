import React, { useState } from 'react'

// components 👉
import './static/css/Login.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button, IconButton } from '@mui/material';

function Login() {
    const [showPassword, setShowPassword] = useState(true);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="Login">
            <div className="Login_heading">
                <p className='Login_heading_title'>Login to your account <span className='Login_heading_hr'>___</span></p>
            </div>
            <form className="Login_inputs">
                <input type="email" name="x_email" className="Login_heading_email_field" placeholder="Email" /><br />
                <input type={showPassword ? "password" : "text"} name="x-password" className="Login_heading_password_field" placeholder="Password" />
                <IconButton onClick={handleShowPassword} className='VisibilityIcon_VisibilityOffIcon'>
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
            </form>
            <div className="Login_button">
                <Button>
                    <div className='Login_button_container'>
                        <p className='Login_button_text'>login</p>
                    </div>
                </Button>
            </div>
        </div>
    )
}

export default Login;