# Selected projects — previous layout (2026-09-19)

The previous home-page layout is a two-column console: a narrow title/kind rail on the left and the first project's full stage on the right. On screens below 900px the rail stacks above the stage. Keep this snapshot for a possible rollback.

Source at the time of the redesign: `app/components/PortfolioExperience.tsx`, selected-projects section, with its original CSS in `app/globals.css` (`.projects-console`, `.projects-rail`, `.project-stage`, `.stage-info`) and `app/public-experience.css` (first two rail overrides). The redesign adds more specific CSS instead of deleting those original rules.

```tsx
<div className="projects-console">
  <div className="projects-rail">
    {projects.map((p, i) => (
      <button key={p.slug} className={active === i ? "active" : ""} aria-pressed={active === i} onClick={() => setActive(i)}>
        <span>0{i + 1}</span><strong>{p.title}</strong><small>{p.kind}</small><i>↗</i>
      </button>
    ))}
    <Link className="all-projects-link" href="/projects">{t.allProjects}<span>↗</span></Link>
  </div>
  {projects[active] && <motion.div className="project-stage" key={projects[active].slug} initial={reduce ? false : { opacity: 0, scale: .985 }} animate={{ opacity: 1, scale: 1 }}>
    <ProjectPreview project={projects[active]} label={t.visual} pending={t.visualPending} />
    <div className="stage-info"><div><p>{projectText(projects[active], lang)}</p><div>{projects[active].stack.map(x => <span key={x}>{x}</span>)}</div></div>
      <nav><Link href={`/projects/${projects[active].slug}`}>{t.open} ↗</Link>{projects[active].github && <a href={projects[active].github} target="_blank" rel="noreferrer">{t.source} ↗</a>}{projects[active].demo && <a href={projects[active].demo} target="_blank" rel="noreferrer">{t.live} ↗</a>}</nav>
    </div>
  </motion.div>}
</div>
```

To restore: replace the redesigned section with this markup, remove the new `.project-peek*` and `.project-stage-mobile` overrides from `app/public-experience.css`, and restore `active` to a single numeric state initialized to `0`.
