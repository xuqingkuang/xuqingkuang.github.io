import { Query } from 'leancloud-storage';

const blogQuery = new Query('Blog');
blogQuery.limit(1000).descending('createdAt');
export default blogQuery;
