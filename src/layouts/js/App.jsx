import React, {useState} from 'react'
import TopNavigation from "./TopNavigation";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import MainContent from "./MainContent";
import {checkContactInfo } from '@/apis/test';
import { useEffect } from 'react';
import '../css/App.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom'
function App () {
  const [visibility,setVisibility] = useState(true);
  const [contactInfo, setContactInfo] = useState([]);
  const [lId, setLId] = useState(-1);
  const [cId, setCId] = useState(-1);
  const ChildRef = React.createRef();
  useEffect(
    () => {
      checkContactInfo().then(
        res => {
          setContactInfo(res.data);
        }
      )
    },[]
  )
  return (
    <div className='content'>
      <Router>
        <TopNavigation showBackground={() => setVisibility(!visibility)}/>
        <div className='main-content'>
          <LeftPart 
            contactInfo={contactInfo} 
            changeLabel={(lId) => {setLId(lId);ChildRef.current.func(1, lId)}} 
            changeClass={(cId) => {setCId(cId);ChildRef.current.func(0, cId)}}/>
          <MainContent cid={cId} lid={lId} onRef={ChildRef}/>
          <RightPart />
        </div>
      </Router>
    </div>
  )
};
export default App;