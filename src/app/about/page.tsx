import type { Metadata } from "next";
import { content } from "@/content";

export const metadata: Metadata = {
    alternates: { canonical: "https://www.techbizznepal.com/about" },
};

export default function About() {
    return <h1 className="bg-red-600">{content.about.page.heading}</h1>;
}
