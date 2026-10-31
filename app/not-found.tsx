import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="shell grid min-h-[80dvh] place-items-center pt-24 text-center">
      <div>
        <h1 className="font-display text-6xl leading-[1.02] sm:text-8xl">Off the trail.</h1>
        <p className="mx-auto mt-6 max-w-sm text-muted">
          This page doesn&apos;t exist (error 404). Even gradient descent gets lost sometimes.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex h-12 items-center rounded-full bg-accent px-6 font-medium text-on-accent transition hover:brightness-110 active:translate-y-px"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
