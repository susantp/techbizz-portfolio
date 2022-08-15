import React, {FC} from "react";

interface whyChooseUsProps {
    heading: string,
    content: string
}

const WhyChooseUsComponent: FC<whyChooseUsProps> =
    ({heading, content}): JSX.Element => {
        return (
            <div>
                <div className={`sectionDiv`}>
                    <div className={`py-4 mt-5`}>
                        <h2 className={`headerText`}>{heading}</h2>
                    </div>
                    <div className={`px-4 sm:px-6 text-justify`}>
                        <p className={`leading-loose text-center text-2xl`}>{content}</p>
                    </div>
                </div>
            </div>
        )
    }
export default WhyChooseUsComponent