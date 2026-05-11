-- Ghazi Constructions — Supabase Schema
-- Run this in the Supabase SQL Editor for a fresh project

-- ── Leads / Contact form submissions ────────────────────────────────────────
create table if not exists leads (
  id          uuid primary key default gen_random_uuid(),
  full_name   text not null,
  email       text not null,
  phone       text,
  subject     text,
  message     text,
  status      text not null default 'new'
                check (status in ('new', 'contacted', 'qualified', 'lost')),
  source      text default 'website_contact_form',
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Auto-update updated_at
create or replace function update_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger leads_updated_at
  before update on leads
  for each row execute function update_updated_at();

-- Row Level Security — only service role can read/write
alter table leads enable row level security;

-- Allow anonymous INSERT (contact form submissions from the public site)
create policy "Public can submit leads"
  on leads for insert
  to anon
  with check (true);

-- Only authenticated users (admin) can SELECT / UPDATE
create policy "Authenticated users can read leads"
  on leads for select
  to authenticated
  using (true);

create policy "Authenticated users can update leads"
  on leads for update
  to authenticated
  using (true);

-- ── Index for dashboard queries ──────────────────────────────────────────────
create index leads_status_idx    on leads (status);
create index leads_created_at_idx on leads (created_at desc);
