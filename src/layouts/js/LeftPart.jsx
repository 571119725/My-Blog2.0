import React from 'react';
import '../css/LeftPart.css';
import ContentInfor from '@/components/js/ContentInfor';
import StatInfor from '@/components/js/StatInfor';
import LabelClassification from '@/components/js/LabelClassification';
function LeftPart(props) {
  const changeLabel = (lId) => {
    props.changeLabel(lId);
  };
  const changeClass = (cId) => {
    props.changeClass(cId);
  } 
  return (
    <div className='left-content'>
      <ContentInfor contactInfo={props.contactInfo}/>
      <StatInfor />
      <LabelClassification changeLabel={(lId) => changeLabel(lId)} changeClass={(cId) => changeClass(cId)}/>
    </div>
  )
};
export default LeftPart;