import React, {FC} from 'react';

const Footer: FC<{ rightsText: string }> = ({ rightsText }): React.JSX.Element => {
    const year = new Date()
    return (
        <footer className={`bg-brown-900 text-white items-center py-3`}>
            <div className={`container mx-auto flex justify-end`}>
                <div className="flex items-center gap-4">
                    <a className="underline" href="/privacy-policy">Privacy policy</a>
                    <span> &copy; {year.getFullYear()} {rightsText}</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
