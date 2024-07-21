import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Đăng Nhập</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' required />
                <FaLock className='icon'/>
            </div> 

            <div className="remember-forgot">
                <label><input type="checkbox" />Nhớ mật khẩu</label>
                <a href="#">Quên mật khẩu?</a>
            </div>

            <button type="submit">Đăng nhập</button>

            <div className="register-link">
                <p>Không có tài khoản? <Link to="/register">Đăng ký</Link></p>
            </div>
        </form>
    </div>
  );
};

export default LoginForm;
