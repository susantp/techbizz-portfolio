import React, {FC,ReactElement} from 'react';
import Image from "next/image";

interface SingleWhatWeDoComponentProps {
    title: string,
    icon: ReactElement,
    image:string,
    slug: string,
    description: string
}

interface WhatWeDoComponentProps {
    heading: string,
    items: Array<SingleWhatWeDoComponentProps>
}

const WhatWeDoComponent: FC<WhatWeDoComponentProps> = ({heading, items}): JSX.Element => {

    const SingleWhatWeDoComponent: FC<SingleWhatWeDoComponentProps> = ({title, slug, description, icon, image}): JSX.Element =>
        <div className={`flex flex-col gap-y-3 items-center p-10`}>
            <div>
                {typeof icon === "object" ? icon : <Image src={image} width={150} height={150} alt={slug}/>}
            </div>
            <div>
                <p className={`text-4xl sm:text-xl font-medium text-center text-slate-600`}>{title}</p>
            </div>
            <div >
                <p className={`text-sm text-center text-slate-400`}>{description}</p>
            </div>
        </div>

    return (
        <div className={`bg-blue-100`}>
            <div className={`sectionDiv`}>
                <div className={`py-4`}><h2 className={`headerText`}>{heading}</h2></div>
                <div className={`grid grid-cols-1 sm:grid-cols-3  gap-y-2 pt-5 `}>
                    {items.map((item) =>
                        <SingleWhatWeDoComponent
                            title={item.title}
                            icon={item.icon}
                            image={item.image}
                            slug={item.slug}
                            description={item.description}
                            key={item.slug}/>
                    )}
                </div>
            </div>
        </div>
    );
}

export default WhatWeDoComponent;