import '../css/AddBlog.css';
import AddButton from '@/components/js/Button1'
import { addBlogToDB  } from '@/apis/test';
import React,{useState} from 'react';
import { message } from 'antd';
import moment from 'moment';
function AddBlog () {
  const [blogTitle,setBlogTitle] = useState('');
  const [blogIntro,setBlogIntro] = useState('');
  const [blogContent,setBlogContent] = useState('');
  const [blogClass,setBlogClass] = useState('');
  const [blogLabel,setBlogLabel] = useState([]);

  const classData = ['学习','生活','旅游','阅读'];
  const labelData = ['js','node','mongodb','html'];

  const checkEntirBlog = () => {
    const blog = {
      blogTitle: blogTitle,
      blogIntro: blogIntro,
      blogContent: blogContent,
      blogClass: blogClass,
      blogLabel: blogLabel,
      moment: moment().format('YYYY-MM-DD HH:mm:ss')
    };
    addBlogToDB(blog).then(
      res => {
        if(res.code === 200) {
          message.info('发布成功！');
        }else{
          console.log(res);
        }
      }
    );
  }
  const formatClass = classData.map(
    (element,id) => {
      return (
        <div key={id} className='single-choose' >
          <label>{element}</label>
          <input 
            type='radio' 
            name='class'
            value={element} 
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
            type='checkbox' 
            value={element}
            onChange={(e) => handleFormatLabel(e)}/>
        </div>
      )
    }
  );
  const handleFormatLabel = (e) => {
    const checked = e.target.checked;
    const selectedLabel = e.target.value;
    var temp = blogLabel;
    if(checked){
      temp.push(selectedLabel);
    }else {
      temp = temp.filter((e) => {
        return e !== selectedLabel;
      });
    };
    setBlogLabel(temp);
  };
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
    </div>
  )
}
export default AddBlog;