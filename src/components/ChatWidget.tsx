"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Message = { role: "user" | "assistant"; text: string };

/**
 * Suggested starter questions + a simple keyword-based responder.
 * This is a fully client-side stub so the site stays static.
 *
 * TO MAKE IT A REAL AI: replace `answer()` with a fetch() to your own
 * API route / serverless function that calls an LLM (OpenAI, etc.).
 * Keep the API key on the server — never in this client file.
 */
const suggestions = [
  `What's ${site.name.split(" ")[0]}'s experience?`,
  "What tech does he work with?",
  "Is he open to freelance work?",
];

function answer(question: string): string {
  const q = question.toLowerCase();
  if (q.includes("experience") || q.includes("work"))
    return `${site.name} is a ${site.role} who has built web applications across the stack. Check the Experience page for the full history.`;
  if (q.includes("tech") || q.includes("stack") || q.includes("skill"))
    return "He works with JavaScript, TypeScript, React, Next.js, Node.js, and more. See the Experience and Projects pages for details.";
  if (q.includes("freelance") || q.includes("hire") || q.includes("available"))
    return "Yes — he's open to freelance and new opportunities. Head to the Contact page to get in touch.";
  if (q.includes("project"))
    return "You can see his work on the Projects page, including this portfolio itself.";
  return `Thanks for asking! For anything specific, the best bet is the Contact page. (This assistant uses simple canned answers for now — hook it up to a real AI backend to make it smarter.)`;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [
      ...m,
      { role: "user", text: trimmed },
      { role: "assistant", text: answer(trimmed) },
    ]);
    setInput("");
  };

  return (
    <>
      {/* Floating launcher */}
      <button
        type="button"
        aria-label="Open AI assistant"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card shadow-lg transition-transform hover:scale-105"
      >
        <span className="text-lg">✨</span>
      </button>

      {/* Panel */}
      {open && (
        <div className="animate-scale-in fixed bottom-20 right-5 z-50 flex h-[30rem] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col rounded-2xl border border-border bg-card shadow-2xl" style={{ transformOrigin: "bottom right" }}>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background-2 text-sm">
                ✨
              </span>
              <div>
                <p className="text-sm font-semibold leading-tight">
                  Ask about {site.name.split(" ")[0]}
                </p>
                <p className="text-xs text-muted">AI assistant</p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="text-muted hover:text-foreground"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.length === 0 ? (
              <div className="space-y-4 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-background-2 text-xl">
                  ✨
                </div>
                <p className="text-sm text-muted">
                  👋 Hi! I&apos;m {site.name.split(" ")[0]}&apos;s AI assistant.
                  Ask me about his work, projects, skills, or availability.
                </p>
                <div className="space-y-2">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => send(s)}
                      className="w-full rounded-lg border border-border px-3 py-2 text-left text-sm text-muted transition-colors hover:border-foreground hover:text-foreground"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((m, i) => (
                <div
                  key={i}
                  className={`animate-fade-up flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <p
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                      m.role === "user"
                        ? "bg-foreground text-background"
                        : "bg-background-2 text-foreground"
                    }`}
                  >
                    {m.text}
                  </p>
                </div>
              ))
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="border-t border-border p-3"
          >
            <div className="flex items-center gap-2 rounded-lg border border-border px-3 py-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted"
              />
              <button
                type="submit"
                aria-label="Send"
                className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground text-background"
              >
                ↑
              </button>
            </div>
            <p className="mt-2 text-center text-[11px] text-muted">
              AI can make mistakes. Verify important info.
            </p>
          </form>
        </div>
      )}
    </>
  );
}
