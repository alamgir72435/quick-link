import React from 'react'
import style from './quickLink.module.css';
const Link = ({link}) => {
  return (
    <div className={style.link}>
      {link?.name}
    </div>
  )
}

export default Link
