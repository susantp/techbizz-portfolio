import React, {FC} from 'react';

const Footer: FC<{ rightsText: string }> = ({ rightsText }): React.JSX.Element => {
    const year = new Date()
    return (
        <footer className={`bg-brown-900 text-white items-center py-3`}>
            <div className={`container mx-auto flex justify-end`}>
                {/*<div>Privacy Policy | Disclaimer | Site Map</div>*/}
                <div> &copy; {year.getFullYear()} {rightsText}</div>
            </div>
        </footer>
    );
}

export default Footer;
