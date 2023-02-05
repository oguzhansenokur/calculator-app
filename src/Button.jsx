import React from 'react'

export default function Button({color='num',type='number',theme='theme-1',text='X',val=text}) {
  return (
    <button role='button'  className={type==='widest' ? 'button double-width '+theme : 'button '+theme}>{text}</button>
  )
}
