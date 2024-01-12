import { useSearchParams, useNavigate } from 'react-router-dom';
import '../css/ShowBlogs.css';
import { getBlog } from '@/apis/test';
import EditButton from '@/components/js/Button1';
import DeleteButton from '@/components/js/Button3';
import React,{useEffect, useState} from 'react';
function ViewBlog (props) {
  const [element, setElement] = useState({});
  const [params] = useSearchParams();
  const classData = ['学习','生活','旅游','阅读','发疯'];
  const labelData = ['前端','Java','C++','深度学习','Python','娱乐','小工具'];
  const nav = useNavigate();
  useEffect(
    () =>{
      let id = params.getAll("id")[0];
      getBlog(id).then(
        res => {
          setElement(res.data[id])
        }
      )
    },[params]
  );
  const editBlog = () => {
    nav("/addBlog", {state: element});
  };
  return (
    <div className='show-blogs'>
      <div className="overview">
          <img src={[require('../../assets/show-blogs.png')]} alt='show-blogs'/>
      </div>
      <div className='blogs-list'>
        <div key={element.id} className='single-blog-container' >
          <div className='single-blog'>
            <div className='time-bar'>
              <div className='iconfont icon-rili'></div>·
              <div className='date-infor'>{element.uploadDate}</div>
            </div>
            <div className='title-bar'>{element.blogTitle}</div>
            <div className='intro-bar'>{element.blogIntro}</div>
            <div className='horizontal'>
              <div className='label-bar'>
                <div className='iconfont icon-fenlei'></div>
                <div className='label-infor'>{classData[element.blogClass]}</div>
              </div>
              <div className={"label-bar"}>
                <div className='iconfont icon-24gf-tags2'></div>
                <div className='label-infor'>{labelData[element.blogLabel]}</div>
              </div>
            </div>
            <div className="blog-content">{element.blogContent}</div>
          </div>
          <div className='blog-split-line'> </div>
        </div>
      </div>
      <div style={{width:"100%", display :sessionStorage.getItem("token") != null ? "flex" : "none", justifyContent: "space-around"}}>
        <EditButton content='编辑' clickButton={() => editBlog()}/>
        <DeleteButton content='删除' blogId = {element.id}/>
      </div>
    </div>
  )
}
export default ViewBlog;