import '../css/ShowBlogs.css';
function ShowBlogs (props) {
  console.log(props.blogsList);
  const blogsList = props.blogsList.map( element => {
    return (
      <div key={element._id} className='single-blog-container'>
        <div className='single-blog'>
        <div className='time-bar'>
          <div className='iconfont icon-rili'></div>
          <div className='date-infor'>{element.moment}</div>
        </div>
        <div className='title-bar'>{element.blogTitle}</div>
        <div className='intro-bar'>{element.blogIntro}</div>
        <div className='label-bar'>
          <div className='iconfont icon-fenlei'></div>
          <div className='label-infor'>{element.blogClass}</div>
        </div>
        <div className={"label-bar " + (element.blogLabel.length > 0 ? "" : "no-display")}>
          <div className='iconfont icon-24gf-tags2'></div>
          <div className='label-infor'>{element.blogLabel.join(' ')}</div>
        </div>
      </div>
      <div className='blog-split-line'> </div>
    </div>
    )
  });
  return (
    <div className='show-blogs'>
      <div className="overview">
          <img src={[require('../../assets/show-blogs.png')]} alt='show-blogs'/>
      </div>
      <div className='search-bar'>
        <input type="text" v-model="search" placeholder="搜索" />
        <div className='iconfont icon-sousuo'></div>
      </div>
      <div className='blogs-list'>
        {blogsList}
      </div>
    </div>
  )
};
export default ShowBlogs;
