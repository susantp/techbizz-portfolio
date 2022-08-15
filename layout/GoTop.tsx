import React, {useEffect, useState} from "react";
import {MdVerticalAlignTop} from "react-icons/md";

const GoTop: React.FC = (): JSX.Element => {
    const [scrollTopVisible, setScrollTopVisible] = useState('invisible');
    useEffect(() => {
        const handleScroll = (event) => {
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            let itemTranslate = Math.min(0, scrollTop / 3 - 60);
            setScrollTopVisible(() => itemTranslate === 0 ? 'visible' : 'invisible')
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);
    const handleScrollTop = () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }
    return (
        <div className={`fixed bottom-0 right-0 m-4 p-3 bg-orange-500 rounded-2xl cursor-pointer ${scrollTopVisible} `} onClick={handleScrollTop}>
            <MdVerticalAlignTop className={`text-5xl text-white`}></MdVerticalAlignTop>
        </div>
    )
}
export default GoTop;