import React from "react";
import type { Metadata } from "next";
import { content } from "@/content";
import WorkProcessComponent from "./_components/WorkProcessComponent";
import WhyChooseUs from "./_components/WhyChooseUsComponent";
import WhatWeDoComponent from "./_components/WhatWeDoComponent";
import ContactUsComponent from "./_components/ContactUsComponent";

export const metadata: Metadata = {
  alternates: { canonical: "https://www.techbizznepal.com/" },
};

const Home = (): React.JSX.Element => (
  <div className="">
    <WorkProcessComponent
      heading={content.page.workProcess.heading}
      processes={content.page.workProcess.processes}
    />
    <WhyChooseUs
      heading={content.page.whyChooseUs.heading}
      content={content.page.whyChooseUs.content}
    />
    <WhatWeDoComponent
      heading={content.page.whatWeDo.heading}
      items={content.page.whatWeDo.items}
    />
    <ContactUsComponent content={content.page.contact} />
  </div>
);

export default Home;
