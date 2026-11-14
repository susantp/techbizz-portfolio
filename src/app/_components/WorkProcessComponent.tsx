import React, {FC} from 'react';
import { contentIcons, type ContentIconId } from "@/components/content-icons";
import type { page } from "@/content/page";

type Process = (typeof page.workProcess.processes)[number];

interface SingleProcessComponentProps {
    title: string;
    icon: ContentIconId;
    image: string;
    slug: string;
}

interface WorkProcessComponentProps {
    heading: string;
    processes: readonly Process[];
}

const WorkProcessComponent: FC<WorkProcessComponentProps> = ({heading, processes}): React.JSX.Element => {
    const SingleProcessComponent: FC<SingleProcessComponentProps> = ({title, icon, slug, image}): React.JSX.Element => {
        const Icon = contentIcons[icon];
        return <div className={`flex flex-col gap-y-7 items-center`}>
            <div>
                <Icon className="text-8xl text-orange-500" />
                {/*<Image src={icon} width={150} height={150} alt={slug}/>*/}
            </div>
            <div>
                <p className={`text-4xl text-slate-600`}>{title}</p>
            </div>
        </div>;
    };

    return (
        <div className={`bg-blue-100`}>
            <div className={`sectionDiv`}>
                <div className={`py-4`}><h2 className={`headerText`}>{heading}</h2></div>
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
