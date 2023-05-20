import React from 'react'
import {Link} from "react-router-dom"

export default function Footer() {
  return (
    <footer>
        <div className="footer-helper">
            <div className="footer-top">
                <div className="footer-top-div">
                    <div className="nav-logo">
                        <Link to="/">
                            <img src="/website-logo.png" alt="" />
                            <div className="nav-logo-text">
                                <p>Peak</p>
                                <p>Performance</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="footer-top-div">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/process">The Process</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-top-div">
                    <div className="footer-socials">
                        <div className="footer-social">
                            <a href="https://www.instagram.com/" target='_blank'>
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </div>
                        <div className="footer-social">
                            <a href="https://www.facebook.com/" target='_blank'>
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </div>
                        <div className="footer-social">
                            <a href="https://twitter.com/home" target='_blank'>
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-helper">
                    <p>@2023 All rights reserved.</p>
                    <span>By <a href="https://github.com/Qnkisa" target='_blank'>Yanislav Angelov</a></span>
                </div>
            </div>
        </div>
    </footer>
  )
}
