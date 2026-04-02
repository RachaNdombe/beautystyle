import { ButtonLink, Card, Section } from '../components/UI.jsx'

const modules = [
  {
    title: 'Formation Make-up',
    items: [
      'Préparation de peau & hygiène',
      'Teint (corrections, contours, textures)',
      'Sourcils & structuration',
      'Yeux (dégradés, eyeliner, faux-cils)',
      'Lèvres & finitions',
    ],
  },
  {
    title: 'Formation Coiffure',
    items: [
      'Préparation et tenue',
      'Brushing & volume',
      'Boucles, wavy, lissage',
      'Attaches (chignon, demi-queue)',
      'Finitions & retouches',
    ],
  },
  {
    title: 'Formation Extensions Cils',
    items: [
      'Bases & sécurité',
      'Isolation & application',
      'Rendu naturel ou intense',
      'Entretien & conseils cliente',
      'Erreurs à éviter',
    ],
  },
]

export function FormationsPage() {
  return (
    <>
      <Section
        eyebrow="Formations"
        title="Choisissez votre module"
        lead="Make-up, coiffure, extensions cils. Nos formatrices qualifiées vous accompagnent pour progresser vite, avec une méthode professionnelle."
      >
        <div className="sb-grid sb-grid--3">
          {modules.map((m) => (
            <Card key={m.title} title={m.title} icon="✦">
              <ul className="sb-list">
                {m.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Prochaines étapes"
        title="Dites-nous votre objectif"
        lead="On vous oriente vers le bon module et on vous envoie les infos (dates, durée, tarifs)."
        variant="soft"
      >
        <div className="sb-ctaPanel">
          <div className="sb-ctaPanel__copy">
            <div className="sb-ctaPanel__title">Prête à vous lancer ?</div>
            <div className="sb-ctaPanel__desc">
              Envoyez-nous votre besoin (module + niveau + disponibilité). Réponse
              rapide.
            </div>
          </div>
          <div className="sb-ctaPanel__actions">
            <ButtonLink to="/contact">Contacter Smith Beauty</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  )
}

