import {useState} from 'react'
import TopNavigation from "./TopNavigation";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";
import MainContent from "./MainContent";
import { getBlogsFromDB } from '@/apis/test';
import { useEffect } from 'react';
import '../css/App.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom'
function App () {
  const [visibility,setVisibility] = useState(true);
  const [blogsList, setBlogsList] = useState([]);
  useEffect(
    () => {
      getBlogsFromDB().then(
        res => {
          setBlogsList(res);
        }
      )
    },[]
  )
  return (
    <div className='content'>
      <Router>
        <TopNavigation showBackground={() => setVisibility(!visibility)}/>
        <div className='main-content'>
          <LeftPart />
          <MainContent blogsList={blogsList}/>
          <RightPart />
        </div>
      </Router>
    </div>
  )
};
export default App;