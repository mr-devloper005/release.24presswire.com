import type { Metadata } from 'next'
import Link from 'next/link'
import { CircleCheck, UserPlus } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="premium-grid bg-[#090a0c] px-4 py-14 text-white sm:px-6 sm:py-20">
        <section className="mx-auto grid max-w-[920px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#121317] shadow-[0_30px_100px_rgba(0,0,0,.4)] lg:grid-cols-[1.08fr_.92fr]">
          <div className="p-7 sm:p-10 lg:p-12">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#ff6a1c]/12 text-[#ff6a1c]"><UserPlus className="h-5 w-5" /></span>
            <p className="mt-7 text-[10px] font-black uppercase tracking-[.22em] text-[#ffae56]">Create account</p>
            <h1 className="editorial-serif mt-2 text-4xl font-black">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-6 border-t border-white/10 pt-5 text-sm text-white/48">Already have an account? <Link href="/login" className="font-black text-[#ffae56] hover:text-[#ff6a1c]">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-[#28150b] to-[#111216] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#ff6a1c]/15 blur-[70px]" />
            <div className="relative flex h-full flex-col justify-between gap-16"><div><p className="text-[10px] font-black uppercase tracking-[.22em] text-[#ffae56]">{pagesContent.auth.signup.badge}</p><h2 className="editorial-serif mt-5 text-4xl font-black leading-[1] tracking-[-.045em] sm:text-5xl">Create your space to publish.</h2><p className="mt-5 text-sm leading-7 text-white/50">Set up your account and prepare clear, polished stories for public discovery.</p></div><div className="space-y-3 text-sm text-white/58">{['Fast account setup', 'A focused publishing workflow'].map(item => <p key={item} className="flex items-center gap-2"><CircleCheck className="h-4 w-4 text-[#ff6a1c]" />{item}</p>)}</div></div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
