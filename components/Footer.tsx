import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
        <small className="mb-2 block text-xs">
            &copy; 2024 Asim Avhad. All rights reserved.
        </small>
        <p className="text-xs">
            <span className="font-semibold">About this website:</span> built with React and Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
        </p>
    </footer>
  )
}