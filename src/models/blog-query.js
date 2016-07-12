import AV from 'leancloud-storage';

const blogQuery = new AV.Query('Blog');
blogQuery.limit(1000).descending('createdAt');
export default blogQuery;
