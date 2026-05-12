import { supabaseAdmin } from '@/lib/supabase'
import ProjectsClient from './ProjectsClient'

export const dynamic = 'force-dynamic'

export default async function PortalProjectsPage() {
  const db = supabaseAdmin()
  const { data: projects = [] } = await db
    .from('projects')
    .select('*')
    .order('created_at', { ascending: true })

  return <ProjectsClient initialProjects={projects ?? []} />
}
