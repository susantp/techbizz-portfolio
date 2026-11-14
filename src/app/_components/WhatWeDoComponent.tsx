import React, {FC} from 'react';
import Image from "next/image";
import { contentIcons, type ContentIconId } from "@/components/content-icons";
import type { page } from "@/content/page";

type Service = (typeof page.whatWeDo.items)[number];

interface SingleWhatWeDoComponentProps {
    title: string;
    icon?: ContentIconId;
    image: string;
    slug: string;
    description: string;
}

interface WhatWeDoComponentProps {
    heading: string;
    items: readonly Service[];
}

const WhatWeDoComponent: FC<WhatWeDoComponentProps> = ({heading, items}): React.JSX.Element => {
    const SingleWhatWeDoComponent: FC<SingleWhatWeDoComponentProps> = ({title, slug, description, icon, image}): React.JSX.Element => {
        const Icon = icon ? contentIcons[icon] : undefined;
        return <div className={`flex flex-col gap-y-3 items-center p-10`}>
            <div>
                {Icon ? <Icon className="text-8xl text-orange-500" /> : <Image src={image} width={150} height={150} alt={slug}/>}
            </div>
            <div>
                <p className={`text-4xl sm:text-xl font-medium text-center text-slate-600`}>{title}</p>
            </div>
            <div >
                <p className={`text-sm text-center text-slate-400`}>{description}</p>
            </div>
        </div>;
    };

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
