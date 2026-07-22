import React from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const Cta = () => {
  return (
    <section className="relative py-20">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-background/20 ring-1 ring-border/25 bg-linear-to-br from-foreground via-foreground to-primary px-6 py-16 shadow-[0_20px_60px_rgba(30,58,95,0.12)] sm:px-14">
          <div
            aria-hidden
            className="absolute inset-0 bg-radial-[circle_at_20%_10%] from-background/25 via-background/0 to-background/0"
          />
          <div aria-hidden className="absolute inset-x-0 -top-24 h-48 bg-linear-to-b from-background/15 to-background/0" />

          <div className="relative  mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
              Stop writing resumes from scratch.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-background/90 sm:text-lg">
              Build your Core Profile once. Apply to any job in seconds. No credit card required to start.
            </p>

            <div className="mt-8 flex w-full justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-2xl bg-background text-primary hover:bg-background/90"
              >
                <Link href="/login" aria-label="Get started with CoreCV">
                  Build My Free Profile
                </Link>
              </Button>
            </div>

            <p className="mt-3 text-xs text-background/80">
              Takes less than 5 minutes to set up.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cta