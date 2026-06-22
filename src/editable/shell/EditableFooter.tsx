'use client'

import Link from 'next/link'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export function EditableFooter() {
  const year = new Date().getFullYear()
  const columns = [
    ['Platform', [['Latest releases', '/search'], ['Publish', '/create'], ['Get started', '/signup']]],
    ['Company', [['About', '/about'], ['Contact', '/contact'], ['Sign in', '/login']]],
    ['Resources', [['Search archive', '/search'], ['Create account', '/signup'], ['Support', '/contact']]],
  ] as const
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070708] text-white">
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#ff6a1c]/10 blur-[100px]" />
      <div className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1.85fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[.035] p-7">
            <Link href="/" className="editorial-brand text-4xl font-black"><span className="text-[#ff6a1c]">24</span>presswire</Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/52">A clear, focused place to distribute releases and discover the stories shaping companies, markets, and communities.</p>
            <div className="mt-8 space-y-3 text-xs text-white/55"><p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#ff6a1c]" /> Media distribution, worldwide</p><p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#ff6a1c]" /> hello@24presswire.com</p></div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map(([title, links]) => <div key={title}><h3 className="border-b border-white/10 pb-4 text-xs font-black uppercase tracking-[.18em] text-[#ffae56]">{title}</h3><div className="mt-5 grid gap-4">{links.map(([label, href]) => <Link key={label} href={href} className="group flex items-center justify-between text-sm font-bold text-white/62 hover:text-white">{label}<ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" /></Link>)}</div></div>)}
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-[11px] uppercase tracking-[.14em] text-white/35 sm:flex-row sm:items-center sm:justify-between"><p>© {year} {SITE_CONFIG.name}. All rights reserved.</p><p>Distribution with clarity.</p></div>
      </div>
    </footer>
  )
}
