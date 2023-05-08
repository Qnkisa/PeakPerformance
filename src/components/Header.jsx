import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import { useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    const [nav,setNav] = useState(false);

    const handleNav = () =>{
        setNav(prevValue => !prevValue);
    }

    useEffect(() => {
        return () => {
          setNav(false);
        };
      }, [location]);

  return (
    <header>
        <nav>
            <div className={`nav-logo ${location.pathname === '/formpage' ? 'align-center' : ''}`}>
                <Link to="/">
                    <img src="/website-logo.png" alt="" />
                    <div className="nav-logo-text">
                        <p>Peak</p>
                        <p>Performance</p>
                    </div>
                </Link>
            </div>
            {location.pathname !== '/formpage' && (
                <>
                    <ul className={nav ? "active" : ""}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/process">The Process</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/formpage">Book A call</Link>
                        </li>
                    </ul>
                    <div className={nav ? "hamburger active" : "hamburger"} onClick={handleNav}>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </div>
                </>
            )}
        </nav>
    </header>
  )
}
