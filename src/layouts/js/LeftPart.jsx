import React from 'react';
import '../css/LeftPart.css';
import ContentInfor from '@/components/js/ContentInfor';
import StatInfor from '@/components/js/StatInfor';
import LabelClassification from '@/components/js/LabelClassification';
function LeftPart() {
  return (
    <div className='left-content'>
      <ContentInfor />
      <StatInfor />
      <LabelClassification />
    </div>
  )
};
export default LeftPart;