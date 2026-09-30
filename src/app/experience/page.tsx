import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";
import ExperienceView from "./ExperienceView";

export const metadata: Metadata = {
  title: "Experience",
  description: "Where I've worked and what I've built.",
};

export default function ExperiencePage() {
  return (
    <div className="container-page pb-20">
      <PageTitle
        title="Experience"
        subtitle="Where I've worked and what I've built."
      />
      <Reveal>
        <ExperienceView />
      </Reveal>
    </div>
  );
}
