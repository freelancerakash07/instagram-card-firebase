import "./Login.scss"
import { IoLogoFacebook } from "react-icons/io";
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <>
    <div className="login-container">
        <div className="login-wraper">
            <a className="login-wraper-img" href="">
                <img className="login-logo" src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Black-Logo.wine.svg" alt="" />
            </a>
            <form action="" className="login-form">
                <input className="login-input" type="text" placeholder="phone number, user name, or email" />
                <input className="login-input" type="text" placeholder="password" />
                <button className="login-button">Log In</button>
            </form>
            <div className="divider">
                OR
            </div>
            <a className="loginfacebook" href=""><i><IoLogoFacebook /></i>Log in with Facebook</a>
            <a className="forgotpassword" href="">Forgot password?</a>
        </div>
        <div className="signup-section">
            <p className="signup-content">Dont have an account? <Link to="/register">Sign up</Link></p>
        </div>
        <div className="app-section">
            <p className="header">Get the app.</p>
            <div className="app-list">
                <a href="" className="app-img">
                    <img className="appImg" src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="" />
                </a>
                <a href="" className="app-img">
                    <img className="appImg2" src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="" />
                </a>
            </div>
        </div>
        <div className="login-footer-section">
            <div className="footer-menu">
                <ul className="frist-menu">
                    <li><a href="">Meta</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Jobs</a></li>
                    <li><a href="">Help</a></li>
                    <li><a href="">Api</a></li>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Terms</a></li>
                    <li><a href="">Location</a></li>
                    <li><a href="">Instagram Lite</a></li>
                    <li><a href="">Threads</a></li>
                    <li><a href="">Contact uploding & Non-User</a></li>
                    <li><a href="">Meta verified</a></li>
                </ul>
                <ul className="last-menu">
                    <li><a href=""><select name="" id="">
                        <option className="option" style={{color : "red"}} value="">English</option>
                    </select></a></li>
                    <li><p>copyright 2024 instagram from Meta</p></li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login