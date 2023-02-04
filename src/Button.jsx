import React from 'react'

export default function Button({type='number',theme='1',text='X',val=text}) {
  return (
    <div className='button' ><p>{text}</p></div>
  )
}
