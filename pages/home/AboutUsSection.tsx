import Link from 'next/link'
import sectionStyles from './Section.module.css'
import { HomeSection } from '..'

export default function AboutUsSection() {
  return (
    <section id={HomeSection.AboutUs} className={sectionStyles.section}>
      <h2 className={sectionStyles.title}>
        We aim towards a world molded by socially-impactful technology, brought out by creative,
        innovative, and compassionate youth.
      </h2>
      <figure>
        <img alt="about-us" />
      </figure>
      {/* Missions */}
      <div>
        <h3>Our Missions</h3>
        <ul>
          <li>Bring youths together in a collective society.</li>
          <li>
            Encourage youths to teach and create with the aid of technology amongst people of mixed
            skill levels.
          </li>
          <li>Bridge creations, real-world issues, and platforms.</li>
        </ul>
      </div>
      {/* Members */}
      <div>
        <h3>Our Members</h3>
        <p>
          At Developh Vietnam, our team bonds as teammates and friends. Together, we create magic
          and keep the organization on track.
        </p>
        <Link href="#">
          <a>Who are we?</a>
        </Link>
      </div>
    </section>
  )
}
