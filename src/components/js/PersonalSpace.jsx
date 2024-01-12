import '../css/PersonalSpace.css';
import EditButton from '@/components/js/Button1';
import { useEffect, useState } from 'react';
import { updateUserInfo } from '../../apis/test';
import { useNavigate } from 'react-router-dom';
function PersonalSpace () {
  const [qq, setQQ] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [addInfo, setAddInfo] = useState('');
  const nav = useNavigate();
  useEffect(
    () => {
      if(sessionStorage.getItem("token") == null){
        nav("/");
      }
    }
  )
  const save = () => {
    const data = {
      password: password,
      qq: qq,
      email: email
    }
    updateUserInfo(data).then(
      (res) => {
        setAddInfo(res.message);
        sessionStorage.clear();
      }
    )
  }
  return (
    <div className='personal-space'>
      <div className='first-block'>
        <div className='funct-title'>编辑资料</div>
        <div className='funct-body'>
          <div className='first-line'>
            <div className='input-area'>
              <div className='iconfont icon-qq edit-area'></div>
              <input type="number" value={qq} onChange = {(e) => {setQQ(e.target.value)}}/>
            </div>
            <div className='input-area'>
              <div className='iconfont icon-icon-mail edit-area'></div>
              <input type="text" value={email} onChange = {(e) => {setEmail(e.target.value)}}/>
            </div>
          </div>
          <div className='sec-line'>
            <div className='input-area'>
              <div className='iconfont icon-miyue edit-area'></div>
              <input type="text" value={password} onChange = {(e) => {setPassword(e.target.value)}}/>
            </div>
          </div>
          <div className='save-button'>
            <EditButton content='保存' clickButton={() => save()}/>
          </div>
          <div className='blog-add-info'>{addInfo}</div>
        </div>
      </div>
    </div>
  )
}
export default PersonalSpace;