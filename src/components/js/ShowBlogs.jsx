import { useEffect, useState, useImperativeHandle } from 'react';
import { getBlogsFromDB } from '@/apis/test';
import '../css/ShowBlogs.css';
import { NavLink } from 'react-router-dom';
import Pagination from '@/components/js/Pagination';
function ShowBlogs (props) {
  const [blogList, setBlogList] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [searchContent, setSearchContent] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [cid, setcid] = useState(-1);
  const [lid, setlid] = useState(-1);
  const classData = ['学习','生活','旅游','阅读','发疯'];
  const labelData = ['前端','Java','C++','深度学习','Python','娱乐','小工具'];
  useEffect(
    () => {
      getBlogsByPage(1, cid, lid);
      // eslint-disable-next-line
    },[]
  );
  useImperativeHandle(props.search, () => {
    return {
      func : func
    }
  })
  const func = (index, id) => {
    setCurrentPage(1);
    if(index === 0){
      setcid(id);
      getBlogsByPage(1, id, lid);
    }
    else{
      setlid(id);
      getBlogsByPage(1, cid, id);
    }
  }
  const getBlogsByPage = (currentPage, classId, labelId) => {
    const pageInfo = {
      blogLabel: labelId,
      blogClass: classId,
      currentPage: currentPage,
      rows: 5,
      content: searchContent
    }
    getBlogsFromDB(pageInfo).then(
      res => {
        var tempData = res.data.data.list;
        var list = Object.keys(tempData).sort(function(a,b){return tempData[a]-tempData[b]});
        var blogs = [];
        blogs = list.map((value, index) => {
          return tempData[value]
        })
        setBlogList(blogs);
        setTotalPage(Number(res.data.data.totalPage));
        setCurrentPage(Number(res.data.data.currentPage));
      }
    )
  }
  const blogsList = blogList.map( element => {
    return (
      <NavLink to={"/viewBlog?id=" + element.id} className="no-style"  key={element.id}>
        <div className='single-blog-container' >
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
              <div className={"label-bar " + (element.blogLabel.length > 0 ? "" : "no-display")}>
                <div className='iconfont icon-24gf-tags2'></div>
                <div className='label-infor'>{labelData[element.blogLabel]}</div>
              </div>
            </div>
          </div>
          <div className='blog-split-line'> </div>
        </div>
      </NavLink>
    )
  });
  return (
    <div className='show-blogs'>
      <div className="overview">
          <img src={[require('../../assets/show-blogs.png')]} alt='show-blogs'/>
      </div>
      <div className='search-bar'>
        <input 
          type="text" 
          value={searchContent} 
          placeholder="搜索" 
          onChange={(e) => {
            setSearchContent(e.target.value)
          }}/>
        <div onClick={() => {
            setCurrentPage(1);
            getBlogsByPage(currentPage, cid, lid)}} className='iconfont icon-sousuo'></div>
      </div>
      <div className='blogs-list'>
        {blogsList}
        <Pagination allPage = {totalPage} currentPage = {currentPage} handleSearch = {(cur) => {getBlogsByPage(cur, cid, lid)}} loading = {false}/>
      </div>
    </div>
  )
};
export default ShowBlogs;
