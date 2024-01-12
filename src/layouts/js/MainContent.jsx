import React, {useImperativeHandle} from 'react';
import '../css/MainContent.css';
import {
  Route,
  Routes
} from 'react-router-dom';
import ShowBlogs from '@/components/js/ShowBlogs';
import AddBlog from '@/components/js/AddBlog';
import PersonalSpace from '@/components/js/PersonalSpace';
import ViewBlog from '@/components/js/ViewBlog';
function MainContent(props) {
  useImperativeHandle(props.onRef, () => {
    return {
      func: func,
    }
  })
  let ChildRef = React.createRef();
  function func(index, id) {
    ChildRef.current.func(index, id);
  }
  return (
    <div className='middle-content'>
      <Routes>
          <Route path='/' element={<ShowBlogs cid = {props.cid} lid = {props.lid} search ={ChildRef}/>} />
          <Route path='/addBlog' element={<AddBlog />} />
          <Route path='/personalSpace' element={<PersonalSpace />} />
          <Route path='/viewBlog' element={<ViewBlog />} />
      </Routes>
    </div>
  )
};
export default MainContent;