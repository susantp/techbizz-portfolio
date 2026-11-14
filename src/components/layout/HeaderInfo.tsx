import React from "react";
import { contentIcons, type ContentIconId } from "@/components/content-icons";

interface InfoItem {
    content: string;
    icon: ContentIconId;
}

interface HeaderInfoProps {
    email: InfoItem;
    phone: InfoItem;
}

const HeaderInfo: React.FC<HeaderInfoProps> = ({email, phone}): React.JSX.Element => {
    const EmailIcon = contentIcons[email.icon];
    const PhoneIcon = contentIcons[phone.icon];

    return (
        <div className={`flex justify-evenly space-x-10 invisible md:visible`}>
            <div className={`text-xl flex gap-x-2 items-center`}>
                <EmailIcon className="text-4xl text-orange-500" />
                {email.content}
            </div>
            <div className={`text-xl flex gap-x-2 items-center`}>
                <PhoneIcon className="text-4xl text-orange-500" />
                {phone.content}
            </div>
        </div>
    )
}
export default HeaderInfo
