import React, {FC} from 'react';
import Image from "next/image";

interface SingleWhatWeDoComponentProps {
    title: string,
    icon: string,
    slug: string,
    description: string
}

interface WhatWeDoComponentProps {
    heading: string,
    items: Array<whatWeDoType>
}

type whatWeDoType = {
    slug: string,
    title: string,
    description: string,
    icon: string
}
const WhatWeDoComponent: FC<WhatWeDoComponentProps> = ({heading, items}): JSX.Element => {

    const SingleWhatWeDoComponent: FC<SingleWhatWeDoComponentProps> = ({title, icon, slug, description}): JSX.Element =>
        <div className={`flex flex-col gap-y-3 items-center px-10`}>
            <div>
                <Image src={icon} width={150} height={150} alt={slug}/>
            </div>
            <div>
                <p className={`text-xl font-medium text-center`}>{title}</p>
            </div>
            <div >
                <p className={`text-sm text-center`}>{description}</p>
            </div>
        </div>

    return (
        <div className={`flex flex-col gap-y-5 my-10 container mx-auto`}>
            <div className={`py-4`}><h2 className={`text-4xl uppercase text-center`}>{heading}</h2></div>
            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-y-6 mt-5 `}>
                {items.map((item) =>
                    <SingleWhatWeDoComponent
                        title={item.title}
                        icon={item.icon}
                        slug={item.slug}
                        description={item.description}
                        key={item.slug}/>
                )}
            </div>
        </div>

    );
}

export default WhatWeDoComponent;