import AV from 'leancloud-storage';

const blogQuery = new AV.Query('Blog');
blogQuery.limit(1000);
export default blogQuery;
