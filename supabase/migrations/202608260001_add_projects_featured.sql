alter table public.projects
  add column if not exists featured boolean not null default false;

create index if not exists projects_featured_created_at_idx
  on public.projects (featured, created_at desc);
