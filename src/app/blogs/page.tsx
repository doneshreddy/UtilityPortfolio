import type { Metadata } from "next";
import PageTitle from "@/components/PageTitle";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Articles on web development, TypeScript, Next.js, and more.",
};

export default function BlogsPage() {
  return (
    <div className="container-page pb-20">
      <PageTitle
        title={
          <span className="inline-flex items-center gap-2">
            Blogs
            <span className="text-orange-400" aria-hidden>
              ⌁
            </span>
          </span>
        }
        subtitle="Articles on web development, TypeScript, Next.js, and more."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, i) => (
          <Reveal
            as="article"
            key={post.title}
            index={i}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:-translate-y-1 hover:border-foreground/40"
          >
            {/* Cover */}
            <div
              className={`h-40 bg-gradient-to-br ${post.tint} transition-transform group-hover:scale-[1.02]`}
            />
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                {post.category}
              </p>
              <h3 className="mt-2 font-semibold leading-snug">{post.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted">{post.excerpt}</p>
              <div className="mt-4 flex items-center gap-3 text-xs text-muted">
                <span>📅 {post.date}</span>
                <span>🕐 {post.readTime}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
