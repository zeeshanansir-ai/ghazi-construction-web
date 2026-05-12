import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const body = await req.json()
  const db = supabaseAdmin()

  const update: Record<string, unknown> = {}
  const fields = ['name','client_name','status','progress_percentage','budget_value','spent_value','location','team_size','started_date','eta_date','image_url']
  for (const f of fields) {
    if (body[f] !== undefined) update[f] = body[f]
  }
  if (update.progress_percentage !== undefined) update.progress_percentage = Number(update.progress_percentage)
  if (update.team_size !== undefined) update.team_size = Number(update.team_size)

  const { data, error } = await db.from('projects').update(update).eq('id', id).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const db = supabaseAdmin()
  const { error } = await db.from('projects').delete().eq('id', id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
