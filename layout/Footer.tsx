import React, {FC} from 'react';

const Footer: FC = (props): JSX.Element => {
    const year = new Date()
    return (
        <footer className={`bg-brown-900 text-white items-center py-3`}>
            <div className={`container mx-auto flex justify-end`}>
                {/*<div>Privacy Policy | Disclaimer | Site Map</div>*/}
                <div> &copy; {year.getFullYear()} All Right Reserved Tech Bizz Pvt.Ltd.</div>
            </div>
        </footer>
    );
}

export default Footer;