import React from 'react';

const Header = () => {
    return (
        <header className="header-area header-style-two header--transparent color-black header--sticky">
            <div className="header-wrapper">
                <div className="header-left d-flex align-items-center">
                    <div className="logo">
                        <a href="index.html">
                            <img src="#" alt="Creative Agency"/>
                        </a>
                    </div>
                    <nav className="mainmenunav d-lg-block ml--50">
                        <div className="navbar-example2">
                            {/*// <!-- Start Mainmanu Nav -->*/}
                            <ul className="mainmenu nav nav-pills">
                                <li className="nav-item">
                                    <a className="nav-link smoth-animation active" href="#home">Home</a>
                                </li>
                                <li>
                                    <a className="nav-link smoth-animation" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link smoth-animation" href="#service">Service</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link smoth-animation" href="#portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link smoth-animation" href="#blog">Blog</a>
                                </li>
                                {/*<li className="nav-item">*/}
                                {/*    <a className="nav-link smoth-animation" href="#contact">Contact</a>*/}
                                {/*</li>*/}
                            </ul>
                            {/*// <!-- End Mainmanu Nav -->*/}
                        </div>
                    </nav>
                </div>
                <div className="header-right">
                    <div className="social-share-inner">
                        <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                    <div className="header-btn ml_md--20 ml_sm--0"><a className="rn-btn" href="#"><span>buy now</span></a>
                    </div>
                    {/*// <!-- Start Humberger Menu  -->*/}
                    <div className="humberger-menu d-block d-lg-none pl--20 pl_sm--10">
                        <span className="menutrigger text-white">
                            <i data-feather="menu"></i>
                        </span>
                    </div>
                    <div className="close-menu d-block d-lg-none">
                        <span className="closeTrigger">
                            <i data-feather="x"></i>
                        </span>
                    </div>
                </div>
            </div>
        </header>

);
};

export default Header;
