import '../css/AddBlog.css';
import { useLocation, useNavigate } from 'react-router-dom';
import AddButton from '@/components/js/Button1';
import { addBlogToDB, editBlog  } from '@/apis/test';
import React,{useState, useEffect} from 'react';
// import { message } from 'antd';
// import moment from 'moment';
function AddBlog () {
  const [id, setId] = useState(-1);
  const [blogTitle,setBlogTitle] = useState('');
  const [blogIntro,setBlogIntro] = useState('');
  const [blogContent,setBlogContent] = useState('');
  const [blogClass,setBlogClass] = useState('');
  const [blogLabel,setBlogLabel] = useState('');
  const [uploadDate, setUploadDate] = useState('');
  const [addInfo, setAddInfo] = useState('');
  const [state, setState] = useState(true);
  const [edit, setEdit] = useState(false);
  const classData = ['学习','生活','旅游','阅读','发疯'];
  const labelData = ['前端','Java','C++','深度学习','Python','娱乐','小工具'];
  const params = useLocation();
  const nav = useNavigate();
  useEffect(
    () => {
      if(sessionStorage.getItem("token") == null){
        nav("/");
      }else{
        const blog = params.state;
        if(blog != null){
          setId(blog.id);
          setBlogTitle(blog.blogTitle);
          setBlogIntro(blog.blogIntro);
          setBlogContent(blog.blogContent);
          setBlogClass(blog.blogClass);
          setBlogLabel(blog.blogLabel);
          setUploadDate(blog.uploadDate);
          setEdit(true);
        }
      }
      // eslint-disable-next-line
    },[params.state]
  )
  const checkEntirBlog = () => {
    const isClick = state;
    if(isClick){
      const blog = {
        blogTitle: blogTitle,
        blogIntro: blogIntro,
        blogContent: blogContent,
        blogClass: blogClass,
        blogLabel: blogLabel,
        // moment: moment().format('YYYY-MM-DD HH:mm:ss')
      };
      if(!edit){
        addBlogToDB(blog).then(
          res => {
            setAddInfo(res.message);
          }
        );
      }else {
        blog.id = id;
        blog.uploadDate = uploadDate;
        editBlog(blog).then(
          res => {
            setAddInfo(res.message);
          }
        )
      }
      setState(false);
      setTimeout(function () {
        setState(true);
      }, 5000);
    }else {
      setAddInfo("请稍后再试！");
    }
    setTimeout(function (){
      setAddInfo(" ");
    }, 10000)
  }
  const formatClass = classData.map(
    (element,id) => {
      return (
        <div key={id} className='single-choose' >
          <label>{element}</label>
          <input 
            type='radio' 
            name='class'
            value={id} 
            onChange={(e) => {
              setBlogClass(e.target.value)
            }}/>
        </div>
      )
    }
  );
  const formatLabel = labelData.map(
    (element,id) => {
      return (
        <div key={id} className='single-choose'>
          <label>{element}</label>
          <input 
            type='radio' 
            name='label'
            value={id}
            onChange={(e) => {
              setBlogLabel(e.target.value)
            }}/>
        </div>
      )
    }
  );
  return (
    <div className='add-blog'>
      <div className="overview">
          <img src={[require("../../assets/addBlog.png")]} alt='add-blog'/>
      </div>
      <div className='form-data'>
        <div className='blog-title-input'>
          <span>标题</span>
          <div>
            <input 
              value={blogTitle}
              onChange={(e) => {
                setBlogTitle(e.target.value);
              }}/>
          </div>
        </div>
        <div className='blog-intro-input'>
          <span>简介</span>
          <div>
            <textarea 
              value={blogIntro}
              onChange={(e) => {
                setBlogIntro(e.target.value);
              }}></textarea>
          </div>
        </div>
        <div className='blog-content-input'>
          <span>内容</span>
          <div>
            <textarea
              value={blogContent}
              onChange={(e) => {
                setBlogContent(e.target.value);
              }}></textarea>
          </div>
        </div>
        <div className='blog-class-choose'>
          <span>分类</span>
          <div className='checkbox-layout'>{formatClass}</div>
        </div>
        <div className='blog-label-choose'>
          <span>标签</span>
          <div className='checkbox-layout'>{formatLabel}</div>
        </div>
      </div>
      <AddButton content='添加' clickButton={checkEntirBlog}/>
      <div className='blog-add-info'>{addInfo}</div>
    </div>
  )
}
export default AddBlog;