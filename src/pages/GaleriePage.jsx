import { ButtonLink, Section } from '../components/UI.jsx'
import galleryImg from '../assets/IMG-20260402-WA0008.jpg'

const galleryImages = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  src: galleryImg,
  alt: `Réalisation beauté ${i + 1}`,
}))

export function GaleriePage() {
  return (
    <>
      <Section
        eyebrow="Galerie"
        title="Photos & vidéos"
        lead=""
      >
        <div className="sb-gallery">
          {galleryImages.map((image) => (
            <div key={image.id} className="sb-gallery__item">
              <img
                className="sb-gallery__img"
                src={assetsImg}
                alt={image.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="sb-center sb-spaceTop">
          <ButtonLink to="/contact">Je veux une démo</ButtonLink>
        </div>
      </Section>
    </>
  )
}

