import '../css/ContentInfor.css'
// import {getContentInfor} from '@/apis'
// import { useEffect } from 'react';
function ContentInfor(){
  // useEffect(
  //   () => {
  //     getContentInfor().then(
  //       (res) => {
  //         console.log(res);
  //       }
  //     )
  //   }
  // )
  return (
    <div className='contact-detail'>
      <div className='wechat'>
        <img className='pict-a'  src={[require('@/assets/wechat2.jpg')]} alt='pict-a'/>
        <img className='pict-b' src={[require('@/assets/wechat1.jpg')]} alt='pict-b'/>
      </div>
      <div className='contact-infor'>
        <div className='title-infor'>
            <span>联系我</span>
        </div>
        <div className='detail-infor'>
          <div className='icon-container'><div className='iconfont icon-qq'></div></div>
          <div><span>111111</span></div>
        </div>
        <div className='detail-infor'>
          <div className='icon-container'><div className='iconfont icon-icon-mail'></div></div>
          <div><span>111111</span></div>
        </div>
      </div>
    </div>
  )
}
export default ContentInfor;