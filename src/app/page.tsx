import { workProcessComponent, whyChooseUs, whatWeDo } from '@/content/site-content';
import React from "react";
import WorkProcessComponent from "./_components/WorkProcessComponent";
import WhyChooseUs from "./_components/WhyChooseUsComponent";
import WhatWeDoComponent from "./_components/WhatWeDoComponent";
import ContactUsComponent from "./_components/ContactUsComponent";


const Home = (): React.JSX.Element => {
    return (
        <div className={``}>
            <WorkProcessComponent heading={workProcessComponent.heading} processes={workProcessComponent.processes}/>
            <WhyChooseUs heading={whyChooseUs.heading} content={whyChooseUs.content}/>
            <WhatWeDoComponent heading={whatWeDo.heading} items={whatWeDo.items}/>
            <ContactUsComponent heading={`Contact US`}/>
        </div>
    )
}

export default Home
