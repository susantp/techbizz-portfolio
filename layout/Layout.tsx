import React from 'react';
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";

function Layout({children}): JSX.Element {
    return (
        <div className={`flex flex-col bg-slate-100 `}>
            <Navbar></Navbar>
            <Content>{children}</Content>
            <Footer></Footer>
        </div>
    );
}

export default Layout;