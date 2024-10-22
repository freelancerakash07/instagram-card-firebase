import "./Register.scss"
import "../Login/Login.scss"
import { IoLogoFacebook } from "react-icons/io";
import {Link} from 'react-router-dom'
const Register = () => {
  return (
    <>
    <div className="login-container reg-container">
        <div className="login-wraper">
            <a className="login-wraper-img" href="">
                <img className="login-logo" src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Black-Logo.wine.svg" alt="" />
            </a>
            <p className="reg-hd-content">Sign up to see photos and videos from your friends.</p>
            <a className="loginfacebook reg-facebook-btn" href=""><i><IoLogoFacebook /></i>Log in with Facebook</a>
            <div className="divider">
                OR
            </div>
            <form action="" className="login-form">
                <input className="login-input" type="text" placeholder="Mobile Number or Email"  name="name"/>
                <input className="login-input" type="text" placeholder="password"  name="name"/>
                <input className="login-input" type="text" placeholder="Full name" name="name" />
                <input className="login-input" type="text" placeholder="Username" name="name" />
                <p className="reg-content">People who use our service may have uploaded your contact information to Instagram. <Link>Learn More</Link></p>
                <p style={{marginBottom : "8px"}} className="reg-content">By signing up, you agree to our <Link>Terms</Link> , <Link>Privacy Policy</Link> and <Link>Cookies Policy</Link> .

                </p>
                <button className="login-button">Sign Up</button>
            </form>
           
          
            
        </div>
        <div className="signup-section">
            <p className="signup-content">Have an account? <Link to="/login">Log in</Link></p>
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
        <div className="login-footer-section reg-footer-section">
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

export default Register