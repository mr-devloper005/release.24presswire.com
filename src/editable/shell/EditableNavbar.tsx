'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const { session, logout } = useEditableLocalAuthSession()
  const links = [
    { label: 'Solutions', href: '/about' },
    { label: 'Discover', href: '/search' },
    { label: 'Resources', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav className="mx-auto flex min-h-[66px] max-w-[1170px] items-center rounded-full border border-white/10 bg-[#111216]/90 px-4 text-white shadow-[0_18px_60px_rgba(0,0,0,.5)] backdrop-blur-xl sm:px-7">
        <Link href="/" className="editorial-brand shrink-0 text-xl font-black sm:text-2xl">
          <span className="text-[#ff6a1c]">24</span>presswire
        </Link>
        <div className="mx-auto hidden items-center gap-8 lg:flex">
          {links.map((item, index) => <Link key={item.label} href={item.href} className="inline-flex items-center gap-1.5 text-[13px] font-bold text-white/72 transition hover:text-[#ffae56]">{item.label}{index !== 1 ? <ChevronDown className="h-3.5 w-3.5" /> : null}</Link>)}
        </div>
        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <Link href="/search" aria-label="Search" className="hidden text-white/65 hover:text-white sm:block"><Search className="h-4 w-4" /></Link>
          {session ? <button onClick={logout} className="hidden text-xs font-bold text-white/75 sm:block">Log out</button> : <Link href="/login" className="hidden text-xs font-bold text-white/75 sm:block">Log in</Link>}
          <Link href={session ? '/create' : '/signup'} className="rounded-full bg-[#ff6a1c] px-5 py-3 text-xs font-black text-white shadow-[0_8px_26px_rgba(255,106,28,.32)] transition hover:bg-[#ffae56] hover:text-black">{session ? 'Publish' : 'Get started'}</Link>
          <button type="button" onClick={() => setOpen(!open)} className="grid h-9 w-9 place-items-center rounded-full border border-white/15 lg:hidden" aria-label="Toggle navigation">{open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button>
        </div>
      </nav>
      {open ? <div className="mx-auto mt-2 grid max-w-[1170px] overflow-hidden rounded-3xl border border-white/10 bg-[#15161a] p-2 shadow-2xl lg:hidden">{links.map((item) => <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-bold text-white/75 hover:bg-white/5 hover:text-[#ffae56]">{item.label}</Link>)}</div> : null}
    </header>
  )
}
