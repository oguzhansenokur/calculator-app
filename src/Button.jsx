import React from 'react'

export default function Button({color='num',setNumber,number,onChange,type='number',theme='theme-1',text='X',val=text}) {

  const screenManupilate=(value)=>{
    if(value==='DEL')
    {
      let typeText=number
      setNumber(typeText.slice(0,-1))
    }
    else if(value==='RESET')
    {
      setNumber('')
    }
    else if(value!=='RESET' && value!=='DEL' && value!=='=')
    {
      let typeText=number+value
      setNumber(typeText)
    }
}

  function calc(fn)
  {
    return new Function('return '+fn)
  }

const calcButton=(value)=>{
  let typeText=number;
    if(value==="=" && number.length!='0')
      {
        
        setNumber(calc(typeText))
      }
}

  return (
    <button role='button'  onClick={text==='=' ? ()=>{calcButton(val)} : ()=>{screenManupilate(val)}}  className={type==='widest' ? 'button double-width '+theme : 'button '+theme}>{text}</button>
  )
}
