import sectionStyles from './Section.module.css'
import styles from './WhatWeDoSection.module.css'
import cn from 'classnames'
import HomeSection from 'models/home/HomeSection'

export default function WhatWeDoSection() {
  return (
    <section id={HomeSection.WhatWeDo} className={sectionStyles.section}>
      <h2 className={sectionStyles.title}>
        We offer comprehensive education and career development for aspiring software engineers.
      </h2>
      <ul>
        {/* Coding class */}
        <NestedListItem
          title="Coding class"
          subItems={[
            'Lower-secondary students (G6-9): Scratch and Hour of Code',
            'High school students (G10-12): Front End (JavaScript, HTML and CSS), Back End (NodeJS) and more in the future!',
          ]}
        />

        {/* Mentoring session */}
        <NestedListItem
          title="Mentoring session"
          subItems={[
            `A team of both junior and senior developers can answer your coding questions, stay
              late fixing your bugs, practice mock job interviews with you or simply show you how to
              enjoy a happy work-life balance`,
          ]}
        />
        {/* TechTalk series */}
        <NestedListItem
          title="TechTalk series"
          subItems={[
            'University students: share their journeys venturing into the tech world',
            'Professionals: share real-life experience working in both tech giants and startups',
          ]}
        />
        {/* Outsourcing */}
        <NestedListItem
          title="Outsourcing"
          subItems={[
            `Build web applications for other organizations and companies to showcase their work
              for affordable compensation`,
          ]}
        />
        {/* Hackathon */}
        <NestedListItem
          title="Hackathon"
          subItems={[
            `A playground of tech enthusiasts to transform ideas into demo products in just 24 to
              36 hours`,
          ]}
        />
        {/* Career fair */}
        <NestedListItem
          title="Career Fair"
          subItems={[
            `Connect students with suitable working opportunities, ranging from internships,
              research to job offers, from trusted companies and institutions`,
          ]}
        />
      </ul>
      <div className={styles.partners}>
        <div className={styles['partner-item']}>
          <img src="/partners/DSC.png" alt="DSC" />
        </div>
        <div className={styles['partner-item']}>
          <img src="/partners/Vietcode.png" alt="Vietcode" />
        </div>
      </div>
    </section>
  )
}

type NestedListItemProps = {
  title: string
  subItems: string[]
}

const NestedListItem: React.FC<NestedListItemProps> = ({ title, subItems }) => {
  return (
    <li className={cn(sectionStyles.subsection, styles.subsection)}>
      <h3 className={sectionStyles['title-2']}>{title}</h3>
      <ul>
        {subItems.map((subItem, index) => (
          <li key={index} className={sectionStyles.paragraph}>
            {subItem}
          </li>
        ))}
      </ul>
    </li>
  )
}
