import NestedListItem from './NestedListItem'
import HomeSection from './HomeSection'

export default function WhatWeDoSection() {
  return (
    <section id={HomeSection.WhatWeDo}>
      <h2>
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
    </section>
  )
}
