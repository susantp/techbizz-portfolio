import React from 'react';
import NavigationItems from "../components/home/NavigationItems";
import useContentSchema from "../hooks/useContentSchema";
import Logo from "../components/home/Logo";
import HeaderInfo from "../components/home/HeaderInfo";


function Navbar(): JSX.Element {
    const {headerInfo, navigationItems, logo} = useContentSchema()
    return (
        <div className={`sticky top-0  bg-white bg-opacity-50 z-10 shadow-sm`}>
            <div className={`container mx-auto w-full flex justify-between flex items-center invisible md:visible `}>
                <Logo title={logo.title} imagePath={logo.imagePath}/>
                <HeaderInfo email={headerInfo.email} phone={headerInfo.phone}/>
                {/*<NavigationItems items={navigationItems}/>*/}
            </div>
        </div>
    );
}

export default Navbar;