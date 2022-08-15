import React from "react";

interface HeaderInfoProps {
    email: InfoItem,
    phone: InfoItem
}

interface InfoItem {
    content: string,
    icon: JSX.Element
}

const HeaderInfo: React.FC<HeaderInfoProps> = ({email, phone}): JSX.Element => {
    return (
        <div className={`flex justify-evenly space-x-10 invisible md:visible`}>
            <div className={`text-xl flex gap-x-2 items-center`}>
                {email.icon}
                {email.content}
            </div>
            <div className={`text-xl flex gap-x-2 items-center`}>
                {phone.icon}
                {phone.content}
            </div>
        </div>
    )
}
export default HeaderInfo