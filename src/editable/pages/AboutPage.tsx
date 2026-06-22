import Link from 'next/link'
import { ArrowRight, CircleCheck, Compass, Layers3, Sparkles } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const valueIcons = [Compass, Layers3, CircleCheck]

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="overflow-hidden bg-[#090a0c] text-white">
        <section className="premium-grid relative border-b border-white/10 px-4 py-20 sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[640px] -translate-x-1/2 rounded-full bg-[#ff6a1c]/10 blur-[110px]" />
          <div className="relative mx-auto max-w-[940px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ff6a1c]/30 bg-[#ff6a1c]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[.22em] text-[#ffae56]">
              <Sparkles className="h-3.5 w-3.5" /> {pagesContent.about.badge}
            </div>
            <h1 className="editorial-serif mx-auto mt-7 max-w-[850px] text-5xl font-black leading-[.96] tracking-[-.055em] sm:text-6xl lg:text-7xl">
              Stories move further when they have a clear place to begin.
            </h1>
            <p className="mx-auto mt-7 max-w-[680px] text-base leading-8 text-white/55 sm:text-lg">
              {SITE_CONFIG.name} gives public updates and editorial stories a focused, polished home built for discovery.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-[1040px] gap-5 lg:grid-cols-[1.25fr_.75fr]">
            <article className="rounded-[2rem] border border-white/10 bg-[#121317] p-7 shadow-[0_24px_80px_rgba(0,0,0,.28)] sm:p-10 lg:p-12">
              <p className="text-[10px] font-black uppercase tracking-[.22em] text-[#ffae56]">About {SITE_CONFIG.name}</p>
              <h2 className="editorial-serif mt-5 max-w-2xl text-3xl font-black leading-[1.08] tracking-[-.035em] sm:text-4xl">
                {pagesContent.about.description}
              </h2>
              <div className="mt-8 max-w-[650px] space-y-5 border-t border-white/10 pt-8 text-[15px] leading-8 text-white/55">
                {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </article>

            <aside className="rounded-[2rem] border border-[#ff6a1c]/20 bg-gradient-to-b from-[#21140e] to-[#111216] p-7 sm:p-9">
              <p className="text-[10px] font-black uppercase tracking-[.22em] text-[#ffae56]">Our point of view</p>
              <p className="editorial-serif mt-5 text-3xl font-black leading-tight">Clarity is part of the story.</p>
              <p className="mt-5 text-sm leading-7 text-white/50">Good publishing should feel calm, useful, and easy to navigate—from the first headline to the final detail.</p>
              <div className="mt-8 space-y-3">
                {['Focused presentation', 'Connected discovery', 'Readable by design'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[.035] px-4 py-3 text-sm font-bold text-white/72">
                    <CircleCheck className="h-4 w-4 shrink-0 text-[#ff6a1c]" /> {item}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0d0e11] px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-[1040px]">
            <div className="mx-auto max-w-[700px] text-center">
              <p className="text-[10px] font-black uppercase tracking-[.22em] text-[#ffae56]">What guides us</p>
              <h2 className="editorial-serif mt-4 text-4xl font-black tracking-[-.04em] sm:text-5xl">A thoughtful system for public stories.</h2>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {pagesContent.about.values.map((value, index) => {
                const Icon = valueIcons[index] || Sparkles
                return (
                  <article key={value.title} className="group rounded-[1.6rem] border border-white/10 bg-[#15161a] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#ff6a1c]/50">
                    <div className="flex items-center justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#ff6a1c]/12 text-[#ff6a1c]"><Icon className="h-5 w-5" /></span>
                      <span className="text-[10px] font-black tracking-[.18em] text-white/25">0{index + 1}</span>
                    </div>
                    <h3 className="editorial-serif mt-7 text-2xl font-black leading-tight">{value.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/48">{value.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto flex max-w-[980px] flex-col items-start justify-between gap-7 rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#17181c] to-[#25150d] p-7 sm:p-10 lg:flex-row lg:items-center">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[.22em] text-[#ffae56]">Continue exploring</p>
              <h2 className="editorial-serif mt-3 max-w-2xl text-3xl font-black tracking-[-.035em] sm:text-4xl">Discover the stories shaping what comes next.</h2>
            </div>
            <Link href="/search" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#ff6a1c] px-7 py-4 text-xs font-black uppercase tracking-[.12em] text-white shadow-[0_12px_32px_rgba(255,106,28,.3)] transition hover:bg-[#ffae56] hover:text-black">
              Explore stories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
