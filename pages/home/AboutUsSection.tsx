import Link from 'next/link'
import sectionStyles from './Section.module.css'
import styles from './AboutUsSection.module.css'
import { HomeSection } from '..'
import cn from 'classnames'

export default function AboutUsSection() {
  return (
    <section id={HomeSection.AboutUs} className={sectionStyles.section}>
      <h2 className={sectionStyles.title}>
        We aim towards a world molded by socially-impactful technology, brought out by creative,
        innovative, and compassionate youth.
      </h2>
      <figure className={styles.illustration}>
        <img src="/about_missions.jpg" alt="about-us" />
      </figure>
      {/* Missions */}
      <div className={sectionStyles.subsection}>
        <h3 className={cn(sectionStyles['title-2'], styles['title-2'])}>Our Missions</h3>
        <ul>
          <li className={sectionStyles.paragraph}>
            Bring youths together in a collective society.
          </li>
          <li className={sectionStyles.paragraph}>
            Encourage youths to teach and create with the aid of technology amongst people of mixed
            skill levels.
          </li>
          <li className={sectionStyles.paragraph}>
            Bridge creations, real-world issues, and platforms.
          </li>
        </ul>
      </div>
      {/* Members */}
      <figure className={styles.illustration}>
        <img src="/about_team.jpg" alt="about-us" />
      </figure>
      <div className={sectionStyles.subsection}>
        <h3 className={cn(sectionStyles['title-2'], styles['title-2'])}>Our Members</h3>
        <p className={sectionStyles.paragraph}>
          At Developh Vietnam, our team bonds as teammates and friends. Together, we create magic
          and keep the organization on track.
        </p>
        <Link href="#">
          <a className="link mt-4 inline-block">Who are we?</a>
        </Link>
      </div>
    </section>
  )
}
