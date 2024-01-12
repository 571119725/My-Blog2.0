import '../css/LoginButton.css';
import {useState} from 'react';
import {login} from '@/apis'
import Button2 from '@/components/js/Button2';
function LoginButton () {
  const [showLoginBox, setShowLoginBox] = useState(false);
  const [password, setPassword] = useState("");
  const [loginState, setLoginState] = useState(sessionStorage.getItem("token") != null);
  const Shake = () => {
    var i = 20,
        that = document.getElementById("shakeButton");
    const active = () => {
        if(i>=0){
            that.style.padding = 0;
            i%2 === 0 ? that.style.paddingLeft = i + "px" : that.style.paddingRight = i + "px";
            i--;
            Timer = setTimeout(active,15);
        }else{
            clearTimeout(Timer);
        };
    };
    var Timer = setTimeout(active,15);
   }
  const clickButton = () => {
    login({
      username: "caozheng",
      password: password
    }).then(
      res =>{
        if(res.success){
          sessionStorage.setItem("token", res.data.token);
          setShowLoginBox(false);
          setLoginState(true);
        }else{
          Shake();
        }
      }
    )   
  }
  return (
    <div className='top'>
      <div className='top-bg'>
        <img 
          src={[require('@/assets/right-top-bg.jpg')]} 
          alt='bg'/>
      </div>
      <div className={'head-protrait' + (loginState ? ' mirrorRotateVertical': '')}>    
        <img 
          src={[require('@/assets/head-protrait.jpg')]} 
          alt='头像'
          onClick={() => setShowLoginBox(!showLoginBox)}/>
      </div>
      <div className={showLoginBox ? 'show-login-box':'hide-login-box'}>
        <div className='password-input'>
          <div className='iconfont icon-miyue'></div>
          <input placeholder='口令！说错不给进！' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <div className='iconfont icon-shanchu2' onClick={() => setPassword("")}></div>
        </div>
        <div id = "shakeButton">
          <Button2 clickButton={() => clickButton()}/>
        </div>
      </div>
      <div className='personal-signature'>
        <span>TECH OTAKUS SAVE THE WORLD</span>
      </div>
    </div>
  )
};
export default LoginButton;