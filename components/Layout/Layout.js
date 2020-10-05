import React from 'react';
import Header from "../Header";
import Footer from "./Footer/footer";

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <div className="main-page active-dark">
                <Header/>
                {children}
                <Footer/>
            </div>
        </React.Fragment>
    );
};

export default Layout;
