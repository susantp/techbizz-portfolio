import React, {FC} from "react";

interface whyChooseUsProps {
    heading: string,
    content: string
}

const WhyChooseUsComponent: FC<whyChooseUsProps> =
    ({heading, content}): JSX.Element => {
        return (
            <div>
                <div className={`flex flex-col gap-y-16 py-32 container mx-auto`}>
                    <div className={`py-4 mt-5`}>
                        <h2 className={`text-xl uppercase text-center `}>{heading}</h2>
                    </div>
                    <div className={`sm:px-6`}>
                        <p className={`leading-loose text-center text-2xl`}>{content}</p>
                    </div>
                </div>
            </div>
        )
    }
export default WhyChooseUsComponent