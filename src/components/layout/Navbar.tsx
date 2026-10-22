import { headerInfo, logo } from '@/content/site-content';
import React from 'react';
import Logo from "./Logo";
import HeaderInfo from "./HeaderInfo";


function Navbar(): React.JSX.Element {
    return (
        <div className={`sticky top-0  bg-white/50 z-10 shadow-xs`}>
            <div className={`container mx-auto w-full flex justify-between flex items-center py-1 md:py-4`}>
                <Logo title={logo.title} imagePath={logo.imagePath}/>
                <HeaderInfo email={headerInfo.email} phone={headerInfo.phone}/>
            </div>
        </div>
    );
}

export default Navbar;
