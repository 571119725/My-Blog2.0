import axios from '../request';
//获得联系方式信息
export function getContentInfor() {
  return axios.get('/api/getContactInfor','ssss');
};
//添加博客
export function addBlogToDB (infor) {
  return axios.post('/api/blogManage/addBlog',infor);
};
//获得所有博客
export function getBlogsFromDB () {
  return axios.post('/api/blogManage/getBlogs');
}