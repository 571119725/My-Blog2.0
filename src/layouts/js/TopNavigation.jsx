import React from 'react';
import '../css/TopNavigation.css';
import '@/iconfont.css'
import { NavLink } from "react-router-dom";
function TopNavigation(props) {
  return (
    <div className='top-navigation'>
      <div className='img-bar'>
        <div className='top-title-img'></div>
      </div>
      <div className='funct-bar' onClick={props.showBackground}>
        <NavLink to='/' className={({ isActive }) => "text-content" + (isActive ? " light" : "")}>
          <div className='iconfont icon-shouye'></div>
          <span>首页</span>
        </NavLink>
        <div style={{display :sessionStorage.getItem("token") != null ? "block" : "none"}}>
          <NavLink to='/addBlog' className={({ isActive }) => "text-content" + (isActive ? " light" : "")}>
            <div className='iconfont icon-xieboke'></div>
            <span>写博客</span>
          </NavLink>
        </div>
        <a className='text-content' href='https://github.com/571119725'>
          <div className='iconfont icon-github'></div>
          <span>My github</span>
        </a>
        <div style={{display :sessionStorage.getItem("token") != null ? "block" : "none"}}>
          <NavLink to='/personalSpace' className={({ isActive }) => "text-content" + (isActive ? " light" : "")}>
            <div className='iconfont icon-kongjian'></div>
            <span>个人空间</span>
          </NavLink>
        </div>
        {/* <div className='iconfont icon-chakan'></div> */}
      </div>
    </div>
  )
};
export default TopNavigation;