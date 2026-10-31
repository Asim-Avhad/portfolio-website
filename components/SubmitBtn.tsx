"use client";

import { useFormStatus } from "react-dom";
import { FiSend } from "react-icons/fi";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 font-medium text-on-accent transition hover:brightness-105 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-on-accent/30 border-t-on-accent" aria-hidden />
          Sending…
        </>
      ) : (
        <>
          Send message
          <FiSend className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </>
      )}
    </button>
  );
}
