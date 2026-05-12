-- ─────────────────────────────────────────────
-- Ghazi Construction — Supabase Schema
-- Run this in: Supabase Dashboard → SQL Editor
-- Project: hztzuiajgxevpnehbbcu
-- ─────────────────────────────────────────────

-- 1. Contact leads (public form submissions)
create table if not exists leads (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  phone      text not null,
  email      text,
  service    text,
  message    text,
  created_at timestamptz not null default now()
);

alter table leads enable row level security;
create policy "anon_insert" on leads for insert to anon with check (true);
create policy "auth_select"  on leads for select  to authenticated using (true);

-- 2. Projects (portal dashboard)
create table if not exists projects (
  id                  uuid primary key default gen_random_uuid(),
  name                text not null,
  client_name         text not null,
  status              text not null default 'on-track'
                      check (status in ('on-track','near-done','risk','completed')),
  progress_percentage integer not null default 0 check (progress_percentage between 0 and 100),
  budget_value        text not null default 'PKR 0',
  spent_value         text default null,
  location            text default null,
  team_size           integer default 0,
  started_date        text default null,
  eta_date            text default null,
  image_url           text default null,
  created_at          timestamptz not null default now()
);

alter table projects enable row level security;
create policy "auth_all" on projects for all to authenticated using (true);
create policy "service_all" on projects for all using (true);

-- 3. Seed data
insert into projects (name, client_name, status, progress_percentage, budget_value, spent_value, location, team_size, started_date, eta_date) values
  ('Bahria Town Expansion',   'Modern Estates Ltd.',  'on-track',  68,  'PKR 2.1 Cr', 'PKR 1.43 Cr', 'Bahria Town, Lahore',   24, 'Mar 2024', 'Apr 2025'),
  ('Defence Rd Office Block', 'Commercial Group Ltd', 'on-track',  45,  'PKR 1.4 Cr', 'PKR 0.63 Cr', 'Defence Rd, Lahore',    18, 'Jun 2024', 'Dec 2024'),
  ('DHA Phase 8 Duplex',      'Mr. Salman Qureshi',  'near-done', 82,  'PKR 0.9 Cr', 'PKR 0.74 Cr', 'DHA Phase 8, Lahore',   12, 'Jan 2024', 'Nov 2024'),
  ('Gulberg Renovation',      'Retail Corp',         'risk',       33,  'PKR 0.6 Cr', 'PKR 0.63 Cr', 'Gulberg III, Lahore',   8,  'Aug 2024', 'Jan 2025'),
  ('Engineers Town Villa',    'Private Client',      'completed', 100,  'PKR 1.1 Cr', 'PKR 1.1 Cr',  'Engineers Town, Lahore',0,  'Sep 2023', 'Oct 2024'),
  ('Model Town Bungalow',     'Dr. Farhan Ahmed',    'completed', 100,  'PKR 0.75 Cr','PKR 0.75 Cr', 'Model Town, Lahore',    0,  'Nov 2023', 'Sep 2024')
on conflict do nothing;

-- 3. Add image_url if upgrading existing table
alter table projects add column if not exists image_url text default null;

-- 4. Storage bucket for project images
insert into storage.buckets (id, name, public)
values ('project-images', 'project-images', true)
on conflict do nothing;

create policy "public_read" on storage.objects
  for select using (bucket_id = 'project-images');

create policy "service_upload" on storage.objects
  for insert with check (bucket_id = 'project-images');

create policy "service_update" on storage.objects
  for update using (bucket_id = 'project-images');

create policy "service_delete" on storage.objects
  for delete using (bucket_id = 'project-images');
