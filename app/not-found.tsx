import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="shell grid min-h-[80dvh] place-items-center pt-24 text-center">
      <div>
        <p className="eyebrow">404 · off the trail</p>
        <h1 className="mt-6 font-display text-6xl leading-none sm:text-8xl">
          This path <em className="text-accent-ink">doesn&apos;t</em> exist.
        </h1>
        <p className="mx-auto mt-6 max-w-sm text-muted">Even gradient descent gets lost sometimes. Let&apos;s head back to base camp.</p>
        <Link href="/" className="mt-10 inline-flex h-12 items-center rounded-full bg-accent px-6 font-medium text-on-accent">
          Back home
        </Link>
      </div>
    </main>
  );
}
