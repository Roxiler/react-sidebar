import React from 'react'
import {IconProps} from './Icon.types'

const Team = ({color, size = 30}: IconProps) => {
  return (
    <svg
      style={{paddingTop: '12px'}} width={size} height={size} className='icon'
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 100 100"
    >
      <path d="M57 44H45c-3.3 0-6 2.7-6 6v9c0 1.1.5 2.1 1.2 2.8.7.7 1.7 1.2 2.8 1.2v9c0 3.3 2.7 6 6 6h4c3.3 0 6-2.7 6-6v-9c1.1 0 2.1-.4 2.8-1.2.7-.7 1.2-1.7 1.2-2.8v-9c0-3.3-2.7-6-6-6z" />
      <circle cx={51} cy={33} r={7} />
      <path d="M36.6 66.7c-.2-.2-.5-.4-.7-.6-1.9-2-3-4.5-3-7.1v-9c0-3.2 1.3-6.2 3.4-8.3.6-.6.1-1.7-.7-1.7H26c-3.3 0-6 2.7-6 6v9c0 1.1.5 2.1 1.2 2.8.7.7 1.7 1.2 2.8 1.2v9c0 3.3 2.7 6 6 6h4c.9 0 1.7-.2 2.4-.5.4-.2.6-.5.6-.9v-5.1c0-.3-.1-.6-.4-.8z" />
      <circle cx={32} cy={29} r={7} />
      <path d="M76 40h-9.6c-.9 0-1.3 1-.7 1.7 2.1 2.2 3.4 5.1 3.4 8.3v9c0 2.6-1 5.1-3 7.1-.2.2-.4.4-.7.6-.2.2-.4.5-.4.8v5.1c0 .4.2.8.6.9.7.3 1.5.5 2.4.5h4c3.3 0 6-2.7 6-6v-9c1.1 0 2.1-.4 2.8-1.2.7-.7 1.2-1.7 1.2-2.8v-9c0-3.3-2.7-6-6-6z" />
      <circle cx={70} cy={29} r={7} />
    </svg>
  )
}

export default Team
