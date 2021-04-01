// 懒加载路由
const About = () => import('./about.vue')
export default {
  path: '/about', 
  name: 'about',
  component: About,
  children: [
  ]
}
