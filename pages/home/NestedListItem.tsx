import React from 'react'

type Props = {
  title: string
  subItems: string[]
}

const NestedListItem: React.FC<Props> = ({ title, subItems }) => {
  return (
    <li>
      <strong>{title}</strong>
      <ul>
        {subItems.map((subItem, index) => (
          <li key={index}>{subItem}</li>
        ))}
      </ul>
    </li>
  )
}

export default NestedListItem
