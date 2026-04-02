const brand = {
  name: 'Smith Beauty',
  tagline: 'Formation maquillage • coiffure • extensions cils',
}

function Header() {
  return (
    <header className="sb-header" role="banner">
      <div className="sb-shell sb-header__inner">
        <div className="sb-brand">
          <div className="sb-brand__name">{brand.name}</div>
          <div className="sb-brand__tagline">{brand.tagline}</div>
        </div>

        <nav className="sb-nav" aria-label="Navigation principale">
          <a href="#accueil" className="sb-nav__link">
            Accueil
          </a>
          <a href="#formations" className="sb-nav__link">
            Formations
          </a>
          <a href="#galerie" className="sb-nav__link">
            Galerie
          </a>
          <a href="#contact" className="sb-nav__link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="sb-footer">
      <div className="sb-shell sb-footer__inner">
        <div className="sb-footer__left">
          <div className="sb-footer__brand">{brand.name}</div>
          <div className="sb-footer__small">
            © {year} • Tous droits réservés
          </div>
        </div>

        <div className="sb-footer__right">
          <a className="sb-footer__link" href="#contact">
            Demander des infos
          </a>
        </div>
      </div>
    </footer>
  )
}

export function Layout({ children }) {
  return (
    <div className="sb-app">
      <Header />
      <main className="sb-main">{children}</main>
      <Footer />
    </div>
  )
}

