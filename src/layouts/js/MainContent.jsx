import React from 'react';
import '../css/MainContent.css';
import {
  Route,
  Routes
} from 'react-router-dom';
import ShowBlogs from '@/components/js/ShowBlogs';
import AddBlog from '@/components/js/AddBlog';
import PersonalSpace from '@/components/js/PersonalSpace';
function MainContent(props) {
  return (
    <div className='middle-content'>
      <Routes>
          <Route path='/' element={<ShowBlogs blogsList={props.blogsList}/>} />
          <Route path='/addBlog' element={<AddBlog />} />
          <Route path='/personalSpace' element={<PersonalSpace />} />
      </Routes>
    </div>
  )
};
export default MainContent;