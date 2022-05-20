import '../css/StatInfor.css'
function StatInfor () {
  return (
    <div className='data'>
      <div className='data-detail'>
        <span>博客总数</span>
        <span>11</span>
      </div>
      <div className='split-line'></div>
      <div className='data-detail black-detail'> 
        <span>分类数</span>
        <span>11</span>
      </div>
      <div className='split-line'></div>
      <div className='data-detail'>
        <span>标签数</span>
        <span>11</span>
      </div>
    </div>
  )
}
export default StatInfor;