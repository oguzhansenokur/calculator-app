import Button from './Button';
import './style.scss';

function App() {
  return (
    <div className="container">
    <div className="container__top">
      <span >calc</span> 
      <div className="container__top__theme-selector">
      <span>Theme</span> 
      <div className="container__top__theme-selector__tool">
        <div className='theme-number-wrapper' ><div className='row'><span>1</span><span>2</span><span>3</span>

        </div>
        <div className="toggler"></div>
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

    </div>
     
    </div>
  );
}

export default App;
