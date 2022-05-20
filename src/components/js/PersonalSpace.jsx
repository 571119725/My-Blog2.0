import '../css/PersonalSpace.css'
function PersonalSpace () {
  return (
    <div className='personal-space'>
      <div className='first-block'>
        <div className='funct-title'>编辑资料</div>
        <div className='funct-body'>
          <div className='first-line'>
            <div className='input-area'>
              <div className='iconfont icon-qq edit-area'></div>
              <input type="number" />
            </div>
            <div className='input-area'>
              <div className='iconfont icon-icon-mail edit-area'></div>
              <input type="text" />
            </div>
          </div>
          <div className='sec-line'>
            <div className='input-area'>
              <div className='iconfont icon-miyue edit-area'></div>
              <input type="number" />
            </div>
          </div>
          <div className='save-button'></div>
        </div>
      </div>
    </div>
  )
}
export default PersonalSpace;