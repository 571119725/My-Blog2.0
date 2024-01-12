import { useEffect, useState } from 'react';
import '../css/StatInfor.css'
import { getOverviewInfo } from '../../apis/test';
function StatInfor () {
  const [blogCount, setBlogCount] = useState(0);
  const [classCount, setClassCount] = useState(0);
  const [labelCount, setLabelCount] = useState(0);
  useEffect(
    () => {
      getOverviewInfo().then(
        (res) => {
          setBlogCount(res.data.data[0]);
          setClassCount(res.data.data[1]);
          setLabelCount(res.data.data[2]);
        }
      )
    }
  )
  return (
    <div className='data'>
      <div className='data-detail'>
        <span>博客总数</span>
        <span>{blogCount}</span>
      </div>
      <div className='split-line'></div>
      <div className='data-detail black-detail'> 
        <span>分类数</span>
        <span>{classCount}</span>
      </div>
      <div className='split-line'></div>
      <div className='data-detail'>
        <span>标签数</span>
        <span>{labelCount}</span>
      </div>
    </div>
  )
}
export default StatInfor;