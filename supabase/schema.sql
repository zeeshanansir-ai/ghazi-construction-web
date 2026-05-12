-- Ghazi Construction: leads table
create table if not exists leads (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  phone      text not null,
  email      text,
  service    text,
  message    text,
  created_at timestamptz not null default now()
);

-- Allow anonymous inserts (public contact form)
alter table leads enable row level security;

create policy "anon_insert" on leads
  for insert to anon with check (true);

create policy "auth_select" on leads
  for select to authenticated using (true);
