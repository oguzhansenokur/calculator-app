import Button from './Button';
import './style.scss';
import React from 'react';

function App() {
  const [theme, setTheme] = React.useState('theme-1');
  const [selectedTheme,setSelectedTheme] = React.useState(1)
  console.log(theme,selectedTheme)
  const toggler =()=>{
    if(theme==='theme-1')
    {
      setTheme('theme-2')
    }
    else if(theme==='theme-2')
    {
      setTheme('theme-3')
    }
    else if(theme==='theme-3')
    {
      setTheme('theme-1')
    }
  }
  return (
    <div className={'page '+theme}>
    <div className="container">
    <div className="container__top">
      <span className={'container__top__calc '+theme} >calc</span> 
      <div className="container__top__theme-selector">
      <span className={'container__top__theme-selector__theme '+ theme}>THEME</span> 
      <div className="container__top__theme-selector__tool">
        <div className='container__top__theme-selector__tool__theme-number-wrapper' ><div className={'container__top__theme-selector__tool__theme-number-wrapper__row '+theme}><span>1</span><span>2</span><span>3</span>

        </div>
        <div className={"container__top__theme-selector__tool__theme-number-wrapper__toggler "+theme}> <div role={'button'} onClick={toggler} className={theme === "theme-1" ? "container__top__theme-selector__tool__theme-number-wrapper__toggler__circle "+theme+' margin-1' : theme==='theme-2' ? "container__top__theme-selector__tool__theme-number-wrapper__toggler__circle "+theme+' margin-2' : theme==='theme-3' ?  "container__top__theme-selector__tool__theme-number-wrapper__toggler__circle "+theme+' margin-3' :''}></div></div>
        </div>
      </div>
      </div>
    </div>
    <div className={"container__scr "+theme}>
      <div className={"container__scr__text-wrapper "+theme}><p >399,981</p></div>
    </div>
    <div className={"container__keyboard "+theme}>
      <Button text='7' theme={theme+'-num'} />
      <Button text='8' theme={theme+'-num'} />
      <Button text='9' theme={theme+'-num'}/>
      <Button text='DEL' theme={theme+'-act'} />
      <Button text='4' theme={theme+'-num'} />
      <Button text='5' theme={theme+'-num'}/>
      <Button text='6' theme={theme+'-num'}/>
      <Button text='+' theme={theme+'-num'} />
      <Button text='1' theme={theme+'-num'} />
      <Button text='2' theme={theme+'-num'} />
      <Button text='3' theme={theme+'-num'} />
      <Button text='-' theme={theme+'-num'} />
      <Button text='.' theme={theme+'-num'} />
      <Button text='0' theme={theme+'-num'} />
      <Button text='/' theme={theme+'-num'} />
      <Button text='X' theme={theme+'-num'} />
      <Button type='widest' theme={theme+'-act'} text='RESET'/>
      <Button type='widest' theme={theme+'-ans'} text='='/>
    

    </div>
     
    </div>
    </div>
  );
}

export default App;
