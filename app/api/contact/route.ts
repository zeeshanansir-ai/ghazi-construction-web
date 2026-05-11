import { createClient } from '@supabase/supabase-js'
import { NextRequest }  from 'next/server'
import { z }           from 'zod'

const ContactSchema = z.object({
  full_name: z.string().min(2, 'Name too short').max(120),
  email:     z.string().email('Invalid email').max(254),
  phone:     z.string().max(30).optional().default(''),
  subject:   z.string().min(1).max(200),
  message:   z.string().min(10, 'Please provide more detail').max(3000),
})

export async function POST(req: NextRequest) {
  let body: unknown
  try { body = await req.json() } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const parsed = ContactSchema.safeParse(body)
  if (!parsed.success) {
    const msg = parsed.error.errors[0]?.message ?? 'Invalid data'
    return Response.json({ error: msg }, { status: 400 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } },
  )

  const { error } = await supabase.from('leads').insert({
    full_name: parsed.data.full_name.trim(),
    email:     parsed.data.email.trim().toLowerCase(),
    phone:     parsed.data.phone?.trim() || null,
    subject:   parsed.data.subject,
    message:   parsed.data.message.trim(),
    source:    'website_contact_form',
  })

  if (error) {
    console.error('[contact] insert error:', error.message)
    return Response.json({ error: 'Failed to save enquiry — please try again.' }, { status: 500 })
  }

  return Response.json({ ok: true })
}
