import Layout from "../layout/Layout";
import Slider from "../components/home/Slider";
import useContentSchema from "../hooks/useContentSchema";
import WorkProcessComponent from "../components/home/WorkProcessComponent";
import React from "react";
import WhyChooseUs from "../components/home/WhyChooseUsComponent";
import WhatWeDoComponent from "../components/home/WhatWeDoComponent";


const Home = (): JSX.Element => {
    const {workProcessComponent, whyChooseUs, whatWeDo} = useContentSchema();
    return (
        <div className={``}>
            <Slider/>
            <WorkProcessComponent heading={workProcessComponent.heading} processes={workProcessComponent.processes}/>
            <WhyChooseUs heading={whyChooseUs.heading} content={whyChooseUs.content}/>
            <WhatWeDoComponent heading={whatWeDo.heading} items={whatWeDo.items}/>
        </div>
    )
}
Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home