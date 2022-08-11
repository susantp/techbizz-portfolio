import React, {FC} from "react";

interface whyChooseUsProps {
    heading: string,
    content: string
}

const WhyChooseUsComponent: FC<whyChooseUsProps> =
    ({heading, content}): JSX.Element => {
        return (
            <div className={`flex flex-col gap-y-5 my-10 container mx-auto`}>
                <div className={`py-4 mt-5`}>
                    <h2 className={`text-4xl uppercase text-center`}>{heading}</h2>
                </div>
                <div>
                    <p className={`leading-loose text-center`}>{content}</p>
                </div>
            </div>
        )
    }
export default WhyChooseUsComponent