export function ButtonLink({ to, children, variant = 'primary' }) {
  const className =
    variant === 'secondary' ? 'sb-btn sb-btn--secondary' : 'sb-btn sb-btn--primary'
  return (
    <a href={to} className={className}>
      {children}
    </a>
  )
}

export function Section({ id, eyebrow, title, lead, children, variant = 'plain' }) {
  return (
    <section id={id} className={`sb-section sb-section--${variant}`}>
      <div className="sb-shell">
        <div className="sb-section__head">
          {eyebrow ? <div className="sb-eyebrow">{eyebrow}</div> : null}
          {title ? <h2 className="sb-h2">{title}</h2> : null}
          {lead ? <p className="sb-lead">{lead}</p> : null}
        </div>
        {children}
      </div>
    </section>
  )
}

export function Card({ title, desc, icon, children }) {
  return (
    <div className="sb-card">
      {icon ? <div className="sb-card__icon" aria-hidden="true">{icon}</div> : null}
      <div className="sb-card__title">{title}</div>
      {desc ? <div className="sb-card__desc">{desc}</div> : null}
      {children}
    </div>
  )
}

