"use client";

import React, {useEffect, useState} from "react";
import {MdVerticalAlignTop} from "react-icons/md";

const GoTop: React.FC = (): React.JSX.Element => {
    const [scrollTopVisible, setScrollTopVisible] = useState('invisible');
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            const itemTranslate = Math.min(0, scrollTop / 3 - 60);
            setScrollTopVisible(() => itemTranslate === 0 ? 'visible' : 'invisible')
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);
    const handleScrollTop = () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }
    return (
        <button type="button" aria-label="Back to top" className={`fixed bottom-9 right-0 m-4 p-2 bg-orange-500 rounded-xl cursor-pointer ${scrollTopVisible} `} onClick={handleScrollTop}>
            <MdVerticalAlignTop className={`text-2xl text-white`}></MdVerticalAlignTop>
        </button>
    )
}
export default GoTop;
