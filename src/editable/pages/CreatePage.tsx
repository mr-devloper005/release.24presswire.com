'use client'

import { FormEvent, useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, LockKeyhole, Send } from 'lucide-react'
import { SITE_CONFIG, type TaskKey } from '@/lib/site-config'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

type DraftPost = {
  id: string
  task: TaskKey
  title: string
  category: string
  summary: string
  url: string
  image: string
  body: string
  createdAt: string
}

const STORE_KEY = 'slot4:created-posts'

const fieldClass = 'rounded-2xl border border-white/10 bg-[#0d0e11] px-4 py-3 text-sm font-bold text-white outline-none transition placeholder:text-white/35 focus:border-[#ff6a1c]'

const saveDraft = (draft: DraftPost) => {
  try {
    const existing = JSON.parse(window.localStorage.getItem(STORE_KEY) || '[]')
    const list = Array.isArray(existing) ? existing : []
    window.localStorage.setItem(STORE_KEY, JSON.stringify([draft, ...list].slice(0, 50)))
  } catch {
    window.localStorage.setItem(STORE_KEY, JSON.stringify([draft]))
  }
}

export default function CreatePage() {
  const { session } = useEditableLocalAuthSession()
  const enabledTasks = useMemo(() => SITE_CONFIG.tasks.filter((task) => task.enabled), [])
  const [task] = useState<TaskKey>((enabledTasks[0]?.key || 'article') as TaskKey)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [summary, setSummary] = useState('')
  const [url, setUrl] = useState('')
  const [image, setImage] = useState('')
  const [body, setBody] = useState('')
  const [created, setCreated] = useState<DraftPost | null>(null)

  const activeTask = enabledTasks.find((item) => item.key === task) || enabledTasks[0]

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const draft: DraftPost = {
      id: `draft-${Date.now()}`,
      task,
      title: title.trim(),
      category: category.trim() || 'uncategorized',
      summary: summary.trim(),
      url: url.trim(),
      image: image.trim(),
      body: body.trim(),
      createdAt: new Date().toISOString(),
    }
    saveDraft(draft)
    setCreated(draft)
    setTitle('')
    setCategory('')
    setSummary('')
    setUrl('')
    setImage('')
    setBody('')
  }

  if (!session) {
    return (
      <EditableSiteShell>
        <main className="premium-grid bg-[#090a0c] px-4 py-14 text-white sm:px-6 sm:py-20">
          <section className="mx-auto grid max-w-[900px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#121317] shadow-[0_30px_100px_rgba(0,0,0,.4)] lg:grid-cols-[.88fr_1.12fr]">
            <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#28150b] to-[#111216] p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#ff6a1c]/15 blur-[70px]" />
              <div className="relative flex h-full items-center justify-center">
                <span className="grid h-24 w-24 place-items-center rounded-3xl bg-[#ff6a1c]/12 text-[#ff6a1c]"><LockKeyhole className="h-12 w-12" /></span>
              </div>
            </div>
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-[10px] font-black uppercase tracking-[.22em] text-[#ffae56]">{pagesContent.create.locked.badge}</p>
              <h1 className="editorial-serif mt-4 text-4xl font-black leading-[1] tracking-[-.045em] sm:text-5xl">{pagesContent.create.locked.title}</h1>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/50">{pagesContent.create.locked.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/login" className="inline-flex items-center gap-2 rounded-full bg-[#ff6a1c] px-6 py-3 text-sm font-black text-white transition hover:bg-[#ffae56] hover:text-black">Login <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/signup" className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[.04] px-6 py-3 text-sm font-black text-white transition hover:border-white/25">Sign up</Link>
              </div>
            </div>
          </section>
        </main>
      </EditableSiteShell>
    )
  }

  return (
    <EditableSiteShell>
      <main className="premium-grid min-h-screen bg-[#090a0c] text-white">
        <section className="mx-auto max-w-[var(--editable-container,1170px)] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-[#121317] p-6 shadow-[0_30px_100px_rgba(0,0,0,.4)] lg:grid-cols-[0.85fr_1.15fr] lg:p-10">
            <aside>
              <p className="text-[10px] font-black uppercase tracking-[.22em] text-[#ffae56]">{pagesContent.create.hero.badge}</p>
              <h1 className="editorial-serif mt-4 text-4xl font-black leading-[1] tracking-[-.045em] sm:text-5xl">{pagesContent.create.hero.title}</h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">{pagesContent.create.hero.description}</p>
            </aside>

            <form onSubmit={submit} className="rounded-[1.6rem] border border-white/10 bg-[#0d0e11] p-5 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[.22em] text-[#ffae56]">Create {activeTask?.label || 'post'}</p>
                  <h2 className="editorial-serif mt-1 text-3xl font-black tracking-[-.045em]">{pagesContent.create.formTitle}</h2>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-xs font-black uppercase tracking-[.16em] text-white/70">{session.name}</span>
              </div>

              <div className="mt-6 grid gap-4">
                <input className={fieldClass} value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Post title" required />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className={fieldClass} value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Category" />
                  <input className={fieldClass} value={url} onChange={(event) => setUrl(event.target.value)} placeholder="Website or source URL" />
                </div>
                <input className={fieldClass} value={image} onChange={(event) => setImage(event.target.value)} placeholder="Featured image URL" />
                <textarea className={`${fieldClass} min-h-24`} value={summary} onChange={(event) => setSummary(event.target.value)} placeholder="Short summary" required />
                <textarea className={`${fieldClass} min-h-48`} value={body} onChange={(event) => setBody(event.target.value)} placeholder="Main content, details, notes, or description" required />
              </div>

              {created ? (
                <div className="mt-5 rounded-2xl border border-[#ff6a1c]/30 bg-[#ff6a1c]/10 p-4 text-white">
                  <p className="flex items-center gap-2 text-sm font-black text-[#ffae56]"><CheckCircle2 className="h-5 w-5" /> {pagesContent.create.successTitle}</p>
                  <p className="mt-1 text-sm font-semibold text-white/70">{created.title}</p>
                </div>
              ) : null}

              <button type="submit" className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#ff6a1c] px-6 text-sm font-black uppercase tracking-[.18em] text-white transition hover:bg-[#ffae56] hover:text-black">
                <Send className="h-4 w-4" /> {pagesContent.create.submitLabel}
              </button>
            </form>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
