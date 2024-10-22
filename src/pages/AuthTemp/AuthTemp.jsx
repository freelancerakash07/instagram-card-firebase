import { IoLogoFacebook } from "react-icons/io"
import { Link } from "react-router-dom"
import "../Login/Login.scss"
import "./AuthTemp.scss"

const AuthTemp = () => {
  return (
    <>
    <div className="login-container">
        <div className="auth-container">
            <div className="auth-left">
            <img src="https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk" alt="" />
             
    <div id="carouselExampleSlidesOnly" className="carousel slide carousel-photo-slaider" data-bs-ride="carousel">
  <div className="carousel-inner carousel-site">
    <div className="carousel-item active">
      <img src="https://i.pinimg.com/736x/36/27/a7/3627a75f9e6998d3a91ddfdd8154a321.jpg" className="d-block w-100  slideImg"  alt=""/>
    </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/564x/e1/b6/c1/e1b6c1e8d45eadc175c3abfe8b8694f1.jpg" className="d-block w-100  slideImg" alt=""/>
    </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/736x/ef/b9/0a/efb90a48271c4709c74828315466ed41.jpg" className="d-block w-100  slideImg" alt=""/>
    </div>
  </div>
</div>

            </div>
            <div className="auth-right">
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
        </div>
       
   
       
    </div>
    </>
  )
}

export default AuthTemp