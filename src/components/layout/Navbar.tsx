import React from 'react';
import type { layout } from '@/content/layout';
import Logo from "./Logo";
import HeaderInfo from "./HeaderInfo";

type NavbarContent = typeof layout.navbar;

function Navbar({ content }: { content: NavbarContent }): React.JSX.Element {
    return (
        <div className={`sticky top-0  bg-white/50 z-10 shadow-xs`}>
            <div className={`container mx-auto w-full flex justify-between flex items-center py-1 md:py-4`}>
                <Logo title={content.logo.title} imagePath={content.logo.imagePath}/>
                <HeaderInfo email={content.headerInfo.email} phone={content.headerInfo.phone}/>
            </div>
        </div>
    );
}

export default Navbar;
