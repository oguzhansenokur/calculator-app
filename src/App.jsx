import Button from './Button';
import './style.scss';

function App() {
  return (
    <div className="container">
    <div className="container__top">
      <span className='container__top__calc' >calc</span> 
      <div className="container__top__theme-selector">
      <span className='container__top__theme-selector__theme'>THEME</span> 
      <div className="container__top__theme-selector__tool">
        <div className='container__top__theme-selector__tool__theme-number-wrapper' ><div className='container__top__theme-selector__tool__theme-number-wrapper__row'><span>1</span><span>2</span><span>3</span>

        </div>
        <div className="container__top__theme-selector__tool__theme-number-wrapper__toggler"> <div className="container__top__theme-selector__tool__theme-number-wrapper__toggler__circle"></div></div>
        </div>
      </div>
      </div>
    </div>
    <div className="container__scr">
      <div className="container__scr__text-wrapper"><p >399,981</p></div>
    </div>
    <div className="container__keyboard">
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>

    </div>
     
    </div>
  );
}

export default App;
