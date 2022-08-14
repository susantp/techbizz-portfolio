import React, {FC} from 'react';
import Image from "next/image";
import { FaBeer } from 'react-icons/fa';

interface SingleProcessComponentProps {
    title: string,
    icon: JSX.Element,
    image:string,
    slug: string,
}

interface WorkProcessComponentProps {
    heading: string,
    processes: Array<processType>
}

type processType = {
    slug: string,
    title: string,
    icon: JSX.Element,
    image: string
}
const WorkProcessComponent: FC<WorkProcessComponentProps> = ({heading, processes}): JSX.Element => {

    const SingleProcessComponent: FC<SingleProcessComponentProps> = ({title, icon, slug, image}): JSX.Element =>
        <div className={`flex flex-col gap-y-7 items-center`}>
            <div>
                {icon}
                {/*<Image src={icon} width={150} height={150} alt={slug}/>*/}
            </div>
            <div>
                <p className={`text-4xl text-slate-600`}>{title}</p>
            </div>
        </div>

    return (
        <div className={`bg-blue-100`}>
            <div className={`flex flex-col gap-y-16 py-32 container mx-auto`}>
                <div className={`py-4`}><h2 className={`text-center text-xl uppercase`}>{heading}</h2></div>
                <div className={`grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5  gap-y-16 mt-5 `}>
                    {processes.map((item) =>
                        <SingleProcessComponent
                            key={item.slug}
                            slug={item.slug}
                            title={item.title}
                            image={item.image}
                            icon={item.icon}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default WorkProcessComponent;