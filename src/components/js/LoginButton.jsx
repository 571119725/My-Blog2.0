import '../css/LoginButton.css';
import {useState} from 'react';
import Button2 from '@/components/js/Button2'
function LoginButton () {
  const [showLoginBox, setShowLoginBox] = useState(false);
  return (
    <div className='top'>
      <div className='top-bg'>
        <img 
          src={[require('@/assets/right-top-bg.jpg')]} 
          alt='bg'/>
      </div>
      <div className='head-protrait'>    
        <img 
          src={[require('@/assets/head-protrait.jpg')]} 
          alt='头像'
          onClick={() => setShowLoginBox(!showLoginBox)}/>
      </div>
      <div className={showLoginBox ? 'show-login-box':'hide-login-box'}>
        <div className='password-input'>
          <div className='iconfont icon-miyue'></div>
          <input placeholder='口令！说错不给进！' type='password'/>
          <div className='iconfont icon-shanchu2'></div>
        </div>
        <Button2 />
      </div>
      <div className='personal-signature'>
        <span>TECH OTAKUS SAVE THE WORLD</span>
      </div>
    </div>
  )
};
export default LoginButton;