import React from 'react'
import {IconProps} from './Icon.types'

const Chats = ({color, size = 28}: IconProps) => {
  return (
    <svg
      style={{marginTop: '10px'}}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256.001 256.001"
      width={size}
    >
      <path d="M236 96a20.023 20.023 0 0 0-20-20h-27.999V48a20.023 20.023 0 0 0-20-20h-128a20.023 20.023 0 0 0-20 20v128a12 12 0 0 0 19.544 9.332L68 162.328V184a20.023 20.023 0 0 0 20 20h92.173l36.283 29.332A12 12 0 0 0 236.001 224ZM44.001 150.868V52h120v35.981l-.001.02.001.019V132H71.583a11.999 11.999 0 0 0-7.544 2.668Zm147.96 31.8a11.999 11.999 0 0 0-7.543-2.668H92.001v-24h76a20.023 20.023 0 0 0 20-20v-36H212l.001 98.868Z" />
    </svg>
  )
}

export default Chats
