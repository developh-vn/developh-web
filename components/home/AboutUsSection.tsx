import Link from 'next/link'
import sectionStyles from './Section.module.css'
import styles from './AboutUsSection.module.css'
import cn from 'classnames'
import HomeSection from 'models/home/HomeSection'

export default function AboutUsSection() {
  return (
    <section id={HomeSection.AboutUs} className={cn(sectionStyles.section, 'lg:container mx-auto')}>
      <h2 className={sectionStyles.title}>
        We aim towards a world molded by socially-impactful technology, brought out by creative,
        innovative, and compassionate youth.
      </h2>
      {/* Missions */}
      <div className={cn(sectionStyles.subsection, styles.subsection)}>
        <figure className={styles.illustration}>
          <img src="/about_missions.jpg" alt="about-us" />
        </figure>
        <aside className={cn(styles['section-content'], 'lg:ml-24 lg:mr-24')}>
          <h3 className={cn(sectionStyles['title-2'], styles['title-2'])}>Our Missions</h3>
          <ul>
            <li className={sectionStyles.paragraph}>
              Bring youths together in a collective society.
            </li>
            <li className={sectionStyles.paragraph}>
              Encourage youths to teach and create with the aid of technology amongst people of
              mixed skill levels.
            </li>
            <li className={sectionStyles.paragraph}>
              Bridge creations, real-world issues, and platforms.
            </li>
          </ul>
        </aside>
      </div>
      {/* Members */}
      <div className={cn(sectionStyles.subsection, styles.subsection, 'lg:flex-row-reverse')}>
        <figure className={styles.illustration}>
          <img src="/about_team.jpg" alt="about-us" />
        </figure>
        <aside className={cn(styles['section-content'], 'lg:mr-48')}>
          <h3 className={cn(sectionStyles['title-2'], styles['title-2'])}>Our Members</h3>
          <p className={sectionStyles.paragraph}>
            At Developh Vietnam, our team bonds as teammates and friends. Together, we create magic
            and keep the organization on track.
          </p>
          <Link href="#">
            <a className="link mt-4 inline-block">Who are we?</a>
          </Link>
        </aside>
      </div>
    </section>
  )
}
