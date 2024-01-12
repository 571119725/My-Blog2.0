import { useEffect, useState } from 'react';
import '../css/LabelClassification.css'
import { getLabelList, getClassList, getOverviewInfo } from '../../apis/test';
function LabelClassification(props) {
  const [blogCount, setBlogCount] = useState(0);
  const [labelList, setLabelList] = useState([]);
  const [classList, setClassList] = useState([]);
  const [selectLabel, setLabel] = useState(-1);
  const [selectClass, setClass] = useState(-1);
  const classData = ['学习','生活','旅游','阅读','发疯'];
  const labelData = ['前端','Java','C++','深度学习','Python','娱乐','小工具'];
  const judgeState = (which, id) => {
    if(which === 0){
      if(selectClass === id)
        return true;
      return false;
    }else{
      if(selectLabel === id)
        return true;
      return false;
    }
  }
  const mapToList = (temp) => {
    var keys = Object.keys(temp);
    var list = []
    for(var ele in keys){
      list[ele] = temp[ele];
    }
    return list;
  }
  useEffect(
    () => {
      getLabelList().then(
        (res) => {
          setLabelList(mapToList(res.data.data));
        }
      );
      getClassList().then(
        (res) => {
          setClassList(mapToList(res.data.data));
        }
      );
      getOverviewInfo().then(
        (res) => {
          setBlogCount(res.data.data[0]);
        }
      );
    },[]
  );
  const labels = labelList.map(
    (ele, index) => {
      if(ele !== 0)
        return (
          <div className={'single-item' + (judgeState(1, index) ? " selected":"")} key = {index} onClick={() => {setLabel(index);props.changeLabel(index);}}>
            <span>{labelData[index]}</span>
            <span>{ele}</span>
          </div>
        )
      else return null;
    }
  )
  const classes = classList.map(
    (ele, index) => {
      if(ele !== 0)
        return (
          <div className={'single-item' + (judgeState(0, index) ? " selected":"")} key = {index} onClick={() => {setClass(index);props.changeClass(index);}}>
            <span>{classData[index]}</span>
            <span>{ele}</span>
          </div>
        )
      else return null;
    }
  )
  return (
  <div className='side-menu'>
    <div className='title'><span>分类</span></div>
    <div className={'single-item' + (judgeState(0, -1) ? " selected":"")} onClick={() => {setClass(-1);props.changeClass(-1);}}>
      <span>全部</span>
      <span>{blogCount}</span>
    </div>
    {classes}
    <div className='title'><span>标签</span></div>
    <div className={'single-item' + (judgeState(1, -1) ? " selected":"")} onClick={() => {setLabel(-1);props.changeLabel(-1);}}>
      <span>全部</span>
      <span>{blogCount}</span>
    </div>
    {labels}
  </div>
  )
}
export default LabelClassification;