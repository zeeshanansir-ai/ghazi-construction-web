import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const db = supabaseAdmin()

  const { data, error } = await db.from('projects').insert({
    name:                body.name,
    client_name:         body.client_name,
    status:              body.status ?? 'on-track',
    progress_percentage: Number(body.progress_percentage ?? 0),
    budget_value:        body.budget_value ?? 'PKR 0',
    spent_value:         body.spent_value ?? null,
    location:            body.location ?? null,
    team_size:           Number(body.team_size ?? 0),
    started_date:        body.started_date ?? null,
    eta_date:            body.eta_date ?? null,
    image_url:           body.image_url ?? null,
  }).select().single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}
