import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";
import ContactForm from "./ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Lambdabees about a software, mobile, automation, or AI project.",
};

export default function ContactPage() {
  return (
    <div className="container-page pb-20">
      <PageTitle
        title="Get in Touch"
        subtitle="Have a product, workflow, or software project in mind? Tell us what you are building."
      />

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal index={1} className="space-y-6">
          {/* Other ways to connect */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-semibold">Direct Contact</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <p className="text-xs text-muted">Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="hover:text-foreground"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <p className="text-xs text-muted">GitHub</p>
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  {site.githubUser}
                </a>
              </li>
            </ul>
          </div>

          {/* Availability */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-semibold">Availability</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-green-500">●</span>
                <span>
                  <span className="block font-medium">
                    Available for new projects
                  </span>
                  <span className="text-xs text-muted">
                    Select engagements and product collaborations
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-muted">📍</span>
                <span>
                  <span className="block font-medium">{site.location}</span>
                  <span className="text-xs text-muted">Remote friendly</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-muted">🕐</span>
                <span>
                  <span className="block font-medium">Quick response</span>
                  <span className="text-xs text-muted">
                    Typically within a few hours
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
