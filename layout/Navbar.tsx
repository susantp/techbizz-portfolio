import React from 'react';
import NavigationItems from "../components/home/NavigationItems";
import useContentSchema from "../hooks/useContentSchema";
import Logo from "../components/home/Logo";


function Navbar(): JSX.Element {
    const [navigationItems, logo] = useContentSchema()
    return (
        <div className={`w-screen py-2`}>
            <div className={`container mx-auto w-full flex justify-between flex items-center `}>
                <Logo title={logo.title} imagePath={logo.imagePath}/>
                <NavigationItems items={navigationItems}/>
            </div>
        </div>
    );
}

export default Navbar;