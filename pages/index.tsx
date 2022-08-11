import Layout from "../layout/Layout";
import Slider from "../components/home/Slider";
import useContentSchema from "../hooks/useContentSchema";
import WorkProcessComponent from "../components/home/WorkProcessComponent";
import React from "react";

const Home: React.FC = (): JSX.Element => {
    const {workProcessComponent} = useContentSchema();
    return (
        <Layout>
            <Slider/>
            <WorkProcessComponent heading={workProcessComponent.title} processes={workProcessComponent.processes}/>
        </Layout>
    )
}
export default Home