'use client'

import { FileText, Mail, Megaphone, Sparkles } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const desks = [
  { icon: FileText, title: 'Editorial desk', body: 'Send story ideas, corrections, source material, and publication questions.' },
  { icon: Megaphone, title: 'Media partnerships', body: 'Discuss distribution, syndication, collaborations, and campaigns.' },
  { icon: Mail, title: 'General support', body: 'Reach the team for account, publishing, or site-related help.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="overflow-hidden bg-[#090a0c] text-white">
        <section className="premium-grid relative border-b border-white/10 px-4 py-16 sm:py-20">
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[560px] -translate-x-1/2 rounded-full bg-[#ff6a1c]/10 blur-[100px]" />
          <div className="relative mx-auto max-w-[900px] text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#ff6a1c]/30 bg-[#ff6a1c]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[.22em] text-[#ffae56]"><Sparkles className="h-3.5 w-3.5" /> {pagesContent.contact.eyebrow}</p>
            <h1 className="editorial-serif mx-auto mt-6 max-w-[820px] text-5xl font-black leading-[.97] tracking-[-.05em] sm:text-6xl">Tell us what you’re preparing to publish.</h1>
            <p className="mx-auto mt-6 max-w-[620px] text-base leading-8 text-white/52">We’ll help route your question to the right place, whether it concerns a story, account, or publishing workflow.</p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto grid max-w-[1040px] gap-5 lg:grid-cols-[.7fr_1.3fr]">
            <aside className="grid gap-3 self-start">
              {desks.map((desk, index) => (
                <article key={desk.title} className="rounded-[1.5rem] border border-white/10 bg-[#141519] p-5 transition hover:border-[#ff6a1c]/45 sm:p-6">
                  <div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#ff6a1c]/12 text-[#ff6a1c]"><desk.icon className="h-4.5 w-4.5" /></span><span className="text-[10px] font-black tracking-[.18em] text-white/25">0{index + 1}</span></div>
                  <h2 className="editorial-serif mt-5 text-2xl font-black">{desk.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-white/48">{desk.body}</p>
                </article>
              ))}
            </aside>
            <div className="rounded-[2rem] border border-white/10 bg-[#121317] p-6 shadow-[0_24px_80px_rgba(0,0,0,.28)] sm:p-9 lg:p-10">
              <p className="text-[10px] font-black uppercase tracking-[.22em] text-[#ffae56]">Send a message</p>
              <h2 className="editorial-serif mt-3 text-3xl font-black sm:text-4xl">{pagesContent.contact.formTitle}</h2>
              <EditableContactLeadForm />
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
