import { Hero } from "@/components/hero";
import { BioSnippet } from "@/components/bio-snippet";
import { SelectedProjects } from "@/components/selected-projects";
import { ProcessSummary } from "@/components/process-summary";
import { Contact } from "@/components/contact";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <BioSnippet />
      <SelectedProjects />
      <ProcessSummary />
      <Testimonials />
      <Contact />
    </div>
  );
}
