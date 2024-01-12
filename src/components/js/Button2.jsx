import React,{useState} from 'react';
import '../css/Button2.css';
function Button2 (props) {
  const [mousePos,setMousePos] = useState(false);
  return (
    <div 
      className='button-box2'
      onMouseOver={() => setMousePos(true)}
      onMouseLeave={() => setMousePos(false)}
      onClick = {props.clickButton}
      >
      <div className={mousePos ? 'show-item':'hide-item'}>
        <img src={[require('@/assets/button_2_2.png')]} alt='button_2_2.png'/>
      </div>
      <div className={mousePos ? 'hide-item':'show-item'}>
        <img src={[require('@/assets/button_2_1.png')]} alt='button_2_1.png'/>
      </div>
      <div className='button-content'>{props.content}</div>
    </div>
  )
};
export default Button2;