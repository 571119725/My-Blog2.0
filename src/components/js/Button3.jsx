import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Button1.css';
import { deleteBlog } from '../../apis/test';
function Button3 (props) {
  const [clickState, setClickState] = useState(false);
  const [content, setContent] = useState("删除");
  const nav = useNavigate();
  const countDown = () =>  { 
    if(!clickState){
      setContent("确定吗？");
      setClickState(true);
      setTimeout(function () {
        setContent("删除");
        setClickState(false);
      }, 5000);
    }else {
      deleteBlog(props.blogId).then(
        () => {
          nav("/");
        }
      )
    }
  };
  return (
    <div 
      className='button-box'
      onClick = {() => countDown()}
      >
      <div className={clickState ? 'show-item':'hide-item'}>
        <img src={[require('@/assets/button_2_2.png')]} alt='button_2_2.png'/>
      </div>
      <div className={clickState ? 'hide-item':'show-item'}>
        <img src={[require('@/assets/button_2_1.png')]} alt='button_2_1.png'/>
      </div>
      <div className='button-content' >{content}</div>
    </div>
  )
};
export default Button3;