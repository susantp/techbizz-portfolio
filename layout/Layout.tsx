import React from 'react';
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";
import GoTop from "./GoTop";

function Layout({children}): JSX.Element {
    return (
        <div className={`bg-slate-100 `}>
            <Navbar></Navbar>
            {children}
            <GoTop></GoTop>
            <Footer></Footer>
        </div>
    );
}

export default Layout;