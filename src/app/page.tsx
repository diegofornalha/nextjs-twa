"use client";

import { Upload } from "@/components/Upload";
import { PWAHandler } from "@/components/PWAHandler";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <PWAHandler />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold">
            Olá, me chamo Diego Fornalha.
          </h1>
        </div>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Comece editando{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
          </li>
          <li>Salve e veja suas alterações instantaneamente.</li>
        </ol>

        <Upload />
      </main>
    </div>
  );
}
