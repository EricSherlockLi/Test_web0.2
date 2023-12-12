import { createRouter, createWebHashHistory } from "vue-router"
import Index from '~/pages/IndexPage.vue'
import About from '~/pages/AboutPage.vue'
import NotFound from '~/pages/404Page.vue'
import Login from '~/pages/LoginPage.vue'

const routes = [{
  path: "/",
  component: Index
}, {
  path: "/about",
  component: About
}, {
  path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound
}, {
  path: "/login",
  component: Login
}]

const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router