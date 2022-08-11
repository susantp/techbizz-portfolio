import React, {FC} from 'react';
import Image from "next/image";

interface SingleProcessComponentProps {
    title: string,
    icon: string,
    slug: string
}

interface WorkProcessComponentProps {
    heading: string,
    processes: Array<processType>
}

type processType = {
    slug: string,
    title: string,
    icon: string
}
const WorkProcessComponent: FC<WorkProcessComponentProps> = ({heading, processes}): JSX.Element => {

    const SingleProcessComponent: FC<SingleProcessComponentProps> = ({title, icon, slug}): JSX.Element =>
        <div className={`flex flex-col gap-y-3 items-center`}>
            <div>
                <Image src={icon} width={150} height={150} alt={slug}/>
            </div>
            <div>
                <p className={`text-xl`}>{title}</p>
            </div>
        </div>

    return (
        <div className={`flex flex-col gap-y-5 my-10`}>
            <div className={`flex w-full justify-evenly py-4`}><h2 className={`text-4xl uppercase`}>{heading}</h2></div>
            <div className={`flex justify-evenly w-full flex-wrap mt-5`}>
                {processes.map((item) =>
                    <SingleProcessComponent
                        key={item.slug}
                        slug={item.slug}
                        title={item.title}
                        icon={item.icon}
                    />
                )}
            </div>
        </div>

    );
}

export default WorkProcessComponent;