import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <article className="container-page max-w-3xl py-16 sm:py-24">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted">Effective October 11, 2026</p>
      <div className="mt-12 space-y-9 text-[1.02rem] leading-8 text-muted">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Information you provide</h2>
          <p className="mt-3">When you contact Lambdabees by email, we receive the information you choose to send, such as your name, email address, company details, and project requirements.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">How information is used</h2>
          <p className="mt-3">We use contact information to respond to inquiries, evaluate potential work, provide requested services, and maintain necessary business records. We do not sell personal information.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">Website data</h2>
          <p className="mt-3">This website does not currently provide user accounts or accept payments. Hosting providers may process standard technical data, such as IP addresses and request logs, to operate and protect the service.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p className="mt-3">For privacy questions, email <a className="font-medium text-foreground underline underline-offset-4" href={`mailto:${company.email}`}>{company.email}</a>.</p>
        </section>
      </div>
      <Link href="/" className="mt-12 inline-flex text-sm font-semibold text-honey-strong hover:text-foreground">← Back to Lambdabees</Link>
    </article>
  );
}
