import { useState } from 'react'
import { ButtonLink, Card, Section } from '../components/UI.jsx'
import heroImg from '../assets/IMG-20260402-WA0008.jpg'

const whatsappNumber = '0827667227'

const galleryModules = {
  ...import.meta.glob('../assets/*.{png,jpg,jpeg,JPG,JPEG,webp,WEBP}', {
    eager: true,
    import: 'default',
  }),
  ...import.meta.glob('../assets/img/*.{png,jpg,jpeg,JPG,JPEG,webp,WEBP}', {
    eager: true,
    import: 'default',
  }),
}

const galleryImages = Object.entries(galleryModules)
  .filter(([path]) => {
    const normalizedPath = path.toLowerCase()
    return (
      !normalizedPath.includes('vite') &&
      !normalizedPath.includes('logo-smith-beauty')
    )
  })
  .map(([, src]) => src)

const heroVideoModules = {
  ...import.meta.glob('../assets/*.{mp4,webm,mov,MP4,WEBM,MOV}', {
    eager: true,
    import: 'default',
  }),
  ...import.meta.glob('../assets/img/*.{mp4,webm,mov,MP4,WEBM,MOV}', {
    eager: true,
    import: 'default',
  }),
}

const heroVideo =
  heroVideoModules['../assets/VID-20260402-WA0012.mp4'] ??
  heroVideoModules['../assets/img/VID-20260402-WA0012.mp4'] ??
  Object.values(heroVideoModules)[0]

function handleWhatsappSubmit(event) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget)

  const name = (formData.get('name') || '').toString().trim()
  const phone = (formData.get('phone') || '').toString().trim()
  const moduleValue = (formData.get('module') || '').toString()
  const message = (formData.get('message') || '').toString().trim()

  const moduleMap = {
    makeup: 'Make-up',
    coiffure: 'Coiffure',
    cils: 'Extensions cils',
  }

  const whatsappMessage = [
    'Bonjour Smith Beauty, je souhaite des informations.',
    `Nom: ${name || '-'}`,
    `Telephone: ${phone || '-'}`,
    `Module: ${moduleMap[moduleValue] || moduleValue || '-'}`,
    `Message: ${message || '-'}`,
  ].join('\n')

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}

export function HomePage() {
  const [heroMediaOk, setHeroMediaOk] = useState(true)

  return (
    <>
      <section id="accueil" className="sb-hero">
        <div className="sb-shell sb-hero__inner">
          <div className="sb-hero__copy">
            <div className="sb-eyebrow">Centre de formation</div>
            <h1 className="sb-h1">
              Vous voulez élargir vos compétences en beauté ?
            </h1>
            <p className="sb-hero__lead">
              La formation en maquillage et coiffure peut vous aider à atteindre vos
              objectifs. Venez découvrir <strong>Smith Beauty</strong> et ses modules
              make-up, coiffure et extensions de cils.
            </p>
            <div className="sb-hero__cta">
              <ButtonLink to="#formations">Voir les formations</ButtonLink>
              <ButtonLink to="#contact" variant="secondary">
                Demander un devis
              </ButtonLink>
            </div>

            <div className="sb-badges" aria-label="Points forts">
              <div className="sb-badge">Formatrices qualifiées</div>
              <div className="sb-badge">Méthode pro & étapes simples</div>
              <div className="sb-badge">Pratique + accompagnement</div>
            </div>
          </div>

          <div className="sb-hero__media">
            {heroMediaOk ? (
              heroVideo ? (
                <video
                  className="sb-heroVideo"
                  src={heroVideo}
                  poster={heroImg}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onError={() => setHeroMediaOk(false)}
                />
              ) : (
                <img
                  className="sb-heroImg"
                  src={heroImg}
                  alt="Smith Beauty — formation maquillage et coiffure"
                  loading="eager"
                  onError={() => setHeroMediaOk(false)}
                />
              )
            ) : (
              <div className="sb-mediaCard">
                <div className="sb-mediaCard__title">Vos visuels ici</div>
                <div className="sb-mediaCard__desc">
                  Ajoutez une vidéo dans <code>src/assets/</code> (mp4/webm/mov).
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Section
        id="modules"
        eyebrow="Modules"
        title="Des formations claires, orientées résultats"
        lead="Choisissez votre spécialité, avancez avec une méthode professionnelle, et gagnez en confiance pour maquiller et coiffer comme une pro."
      >
        <div className="sb-grid sb-grid--3">
          <Card
            title="Make-up"
            desc="Teint, yeux, lèvres, corrections, looks jour/soir, hygiène & matériel."
            icon="✦"
          />
          <Card
            title="Coiffure"
            desc="Brushing, attaches, préparation, finitions, tenue longue durée."
            icon="✦"
          />
          <Card
            title="Extensions cils"
            desc="Bases, application, sécurité, entretien, rendu naturel ou intense."
            icon="✦"
          />
        </div>
      </Section>

      <Section
        eyebrow="Pourquoi Smith Beauty"
        title="Une expérience pro, à votre rythme"
        lead="Faites confiance à nos formatrices pour vous transmettre les bons gestes et les réflexes professionnels."
        variant="soft"
      >
        <div className="sb-grid sb-grid--2">
          <Card
            title="Apprentissage guidé"
            desc="Étapes simples, démonstrations, pratique et retours personnalisés."
            icon="✓"
          />
          <Card
            title="Image & clientèle"
            desc="Des bases solides pour travailler sur modèles et développer votre activité."
            icon="✓"
          />
        </div>
        <div className="sb-center sb-center--gapTop">
          <ButtonLink to="#contact">Réserver une place</ButtonLink>
        </div>
      </Section>

      <Section
        id="formations"
        eyebrow="Formations"
        title="Choisissez votre module"
        lead="Make-up, coiffure, extensions cils. Nos formatrices qualifiées vous accompagnent pour progresser vite, avec une méthode professionnelle."
      >
        <div className="sb-grid sb-grid--3">
          <Card title="Formation Make-up" icon="✦">
            <ul className="sb-list">
              <li>Préparation de peau & hygiène</li>
              <li>Teint (corrections, contours, textures)</li>
              <li>Sourcils & structuration</li>
              <li>Yeux (dégradés, eyeliner, faux-cils)</li>
              <li>Lèvres & finitions</li>
            </ul>
          </Card>
          <Card title="Formation Coiffure" icon="✦">
            <ul className="sb-list">
              <li>Préparation et tenue</li>
              <li>Brushing & volume</li>
              <li>Boucles, wavy, lissage</li>
              <li>Attaches (chignon, demi-queue)</li>
              <li>Finitions & retouches</li>
            </ul>
          </Card>
          <Card title="Formation Extensions Cils" icon="✦">
            <ul className="sb-list">
              <li>Bases & sécurité</li>
              <li>Isolation & application</li>
              <li>Rendu naturel ou intense</li>
              <li>Entretien & conseils cliente</li>
              <li>Erreurs à éviter</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section
        id="galerie"
        eyebrow="Galerie"
        title="Photos & vidéos"
        
        variant="soft"
      >
        <div className="sb-gallery">
          {galleryImages.length > 0 ? (
            galleryImages.map((src, idx) => (
              <div key={`${src}-${idx}`} className="sb-gallery__item">
                <img
                  className="sb-gallery__img"
                  src={src}
                  alt={`Réalisation Smith Beauty ${idx + 1}`}
                  loading="lazy"
                />
              </div>
            ))
          ) : (
            <div className="sb-gallery__item">
              <div className="sb-gallery__ph">
                <div className="sb-gallery__phTop">Aucune image trouvée</div>
                <div className="sb-gallery__phBottom">
                  Ajoutez des fichiers dans <code>src/assets/img/</code>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="sb-center sb-spaceTop">
          <ButtonLink to="#contact">Je veux une démo</ButtonLink>
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="Parlons de votre formation"
        lead="Dites-nous ce que vous voulez apprendre (make-up, coiffure, extensions cils) et votre disponibilité. On vous répond rapidement."
      >
        <div className="sb-grid sb-grid--2">
          <div className="sb-card sb-card--flat">
            <div className="sb-card__title">Coordonnées</div>
            <div className="sb-contactList">
              <div className="sb-contactRow">
                <div className="sb-contactRow__k">Téléphone</div>
                <div className="sb-contactRow__v">0827667227</div>
              </div>
              <div className="sb-contactRow">
                <div className="sb-contactRow__k">Email</div>
                <div className="sb-contactRow__v">contact@smithbeauty.com</div>
              </div>
              <div className="sb-contactRow">
                <div className="sb-contactRow__k">Ville</div>
                <div className="sb-contactRow__v">Kinshasa</div>
              </div>
              <div className="sb-contactRow">
                <div className="sb-contactRow__k">Adresse</div>
                <div className="sb-contactRow__v">Kinshasa, Ngaliame UpN</div>
              </div>
            </div>
            <div className="sb-note">
              
            </div>
          </div>

          <form
            className="sb-card sb-card--flat"
            onSubmit={handleWhatsappSubmit}
          >
            <div className="sb-card__title">Demande d’informations</div>
            <div className="sb-form">
              <label className="sb-field">
                <div className="sb-field__label">Nom complet</div>
                <input className="sb-input" name="name" autoComplete="name" />
              </label>
              <label className="sb-field">
                <div className="sb-field__label">Téléphone</div>
                <input className="sb-input" name="phone" autoComplete="tel" />
              </label>
              <label className="sb-field">
                <div className="sb-field__label">Module souhaité</div>
                <select className="sb-input" name="module" defaultValue="makeup">
                  <option value="makeup">Make-up</option>
                  <option value="coiffure">Coiffure</option>
                  <option value="cils">Extensions cils</option>
                </select>
              </label>
              <label className="sb-field">
                <div className="sb-field__label">Message</div>
                <textarea className="sb-input sb-textarea" name="message" rows={5} />
              </label>

              <button className="sb-btn sb-btn--primary" type="submit">
                Envoyer sur WhatsApp
              </button>
              <div className="sb-note">
                
              </div>
            </div>
          </form>
        </div>
      </Section>
    </>
  )
}

