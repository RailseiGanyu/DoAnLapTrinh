import React from 'react';
import './RegisterForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Đăng ký</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required/>
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="email" placeholder='Nhập email' required/>
                <IoMdMail className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' required/>
                <FaLock className='icon' />
            </div>
            <div className="input-box">
                <input type="password" placeholder='Nhập lại Password' required/>
                <FaLock className='icon' />
            </div>
            <h3>Hiển thị chính sách bảo mật</h3>
            <div className="remember-forgot">
                <label><input type="checkbox" />Vui lòng xác nhận rằng bạn đồng ý với chính sách bảo mật của chúng tối</label>
            </div>
            <button type="submit" className="register-button"><Link to="/login" className="link-no-underline">Đăng ký</Link></button>
        </form>
    </div>
  );
};

export default RegisterForm;
