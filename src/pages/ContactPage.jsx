import { Section } from '../components/UI.jsx'

const contact = {
  phone: '0827667227',
  email: 'contact@smithbeauty.com',
  city: 'Votre ville',
  address: 'Adresse à compléter',
}

const whatsappNumber = '0827667227'

function Field({ label, children }) {
  return (
    <label className="sb-field">
      <div className="sb-field__label">{label}</div>
      {children}
    </label>
  )
}

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

export function ContactPage() {
  return (
    <>
      <Section
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
                <div className="sb-contactRow__v">{contact.phone}</div>
              </div>
              <div className="sb-contactRow">
                <div className="sb-contactRow__k">Email</div>
                <div className="sb-contactRow__v">{contact.email}</div>
              </div>
              <div className="sb-contactRow">
                <div className="sb-contactRow__k">Ville</div>
                <div className="sb-contactRow__v">{contact.city}</div>
              </div>
              <div className="sb-contactRow">
                <div className="sb-contactRow__k">Adresse</div>
                <div className="sb-contactRow__v">{contact.address}</div>
              </div>
            </div>
            <div className="sb-note">
              Tu peux remplacer ces infos par WhatsApp / Instagram / Facebook si tu
              préfères.
            </div>
          </div>

          <form
            className="sb-card sb-card--flat"
            onSubmit={handleWhatsappSubmit}
          >
            <div className="sb-card__title">Demande d’informations</div>
            <div className="sb-form">
              <Field label="Nom complet">
                <input className="sb-input" name="name" autoComplete="name" />
              </Field>
              <Field label="Téléphone">
                <input className="sb-input" name="phone" autoComplete="tel" />
              </Field>
              <Field label="Module souhaité">
                <select className="sb-input" name="module" defaultValue="makeup">
                  <option value="makeup">Make-up</option>
                  <option value="coiffure">Coiffure</option>
                  <option value="cils">Extensions cils</option>
                </select>
              </Field>
              <Field label="Message">
                <textarea className="sb-input sb-textarea" name="message" rows={5} />
              </Field>

              <button className="sb-btn sb-btn--primary" type="submit">
                Envoyer sur WhatsApp
              </button>
              <div className="sb-note">
                En cliquant sur Envoyer, WhatsApp s'ouvre avec votre message prêt à
                être envoyé.
              </div>
            </div>
          </form>
        </div>
      </Section>
    </>
  )
}

