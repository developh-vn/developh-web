import React from 'react'
import sectionStyles from './Section.module.css'

type Props = {
  title: string
  subItems: string[]
}

const NestedListItem: React.FC<Props> = ({ title, subItems }) => {
  return (
    <li className={sectionStyles.subsection}>
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

export default NestedListItem
