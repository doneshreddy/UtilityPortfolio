import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <article className="container-page max-w-3xl py-16 sm:py-24">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Terms of Use</h1>
      <p className="mt-4 text-sm text-muted">Effective October 11, 2026</p>
      <div className="mt-12 space-y-9 text-[1.02rem] leading-8 text-muted">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Website purpose</h2>
          <p className="mt-3">This website provides general information about Lambdabees, its software engineering capabilities, and the founder&apos;s portfolio. Content may be updated as services and projects evolve.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">No service agreement</h2>
          <p className="mt-3">Using this website or sending an inquiry does not create a client relationship. Any paid engagement, deliverables, responsibilities, and commercial terms must be defined in a separate written agreement.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">Intellectual property</h2>
          <p className="mt-3">Unless otherwise stated, the Lambdabees name, visual identity, website design, and original site content belong to Lambdabees. Third-party product names and marks belong to their respective owners.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p className="mt-3">Questions about these terms can be sent to <a className="font-medium text-foreground underline underline-offset-4" href={`mailto:${company.email}`}>{company.email}</a>.</p>
        </section>
      </div>
      <Link href="/" className="mt-12 inline-flex text-sm font-semibold text-honey-strong hover:text-foreground">← Back to Lambdabees</Link>
    </article>
  );
}
