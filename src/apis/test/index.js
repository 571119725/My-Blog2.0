import axios from '../request';
//获得联系方式信息
export function getContentInfor() {
  return axios.get('/api/getContactInfor','ssss');
};
//添加博客
export function addBlogToDB (info) {
  return axios.post('/addBlog',info);
};
export function editBlog(info){
  return axios.post('/editBlog', info);
}
//获得所有博客
export function getBlogsFromDB (info) {
  return axios.post('/getBlogList', info);
}
export function getBlog (id) {
  return axios.post("/getBlog", id);
}
export function login (user) {
  return axios.post('/login', user);
}
export function checkContactInfo () {
  return axios.post("/checkContactInfo");
}
export function getOverviewInfo () {
  return axios.post("/getOverviewInfo");
}
export function getLabelList(){
  return axios.post("/getLabelList");
}
export function getClassList(){
  return axios.post("/getClassList");
}

export function deleteBlog(info){
  return axios.post("/deleteBlog", info);
}
export function updateUserInfo(info){
  return axios.post("updateUserInfo", info)
}