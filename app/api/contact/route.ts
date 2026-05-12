import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const Schema = z.object({
  name:    z.string().min(2),
  phone:   z.string().min(7),
  email:   z.string().email().optional().or(z.literal('')),
  service: z.string().optional(),
  message: z.string().optional(),
})

export async function POST(req: NextRequest) {
  const body = await req.json()
  const parsed = Schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  )

  const { error } = await supabase.from('leads').insert({
    name:    parsed.data.name,
    phone:   parsed.data.phone,
    email:   parsed.data.email || null,
    service: parsed.data.service || null,
    message: parsed.data.message || null,
  })

  if (error) {
    console.error('[contact] insert error:', error)
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
