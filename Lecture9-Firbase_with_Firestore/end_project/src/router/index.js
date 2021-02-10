import { createRouter, createWebHistory } from "vue-router";
import PostList from "../components/PostList.vue";
import SinglePost from "../components/SinglePost.vue";
import TagPage from "../components/TagPage.vue";
import Login from "@/views/Login";
import Register from "@/views/Register";
import AddPost from "@/views/AddPost";

const routes = [
  {
    path: "/",
    name: "PostList",
    component: PostList
  },
  {
    path: "/:postID",
    name: "SinglePost",
    component: SinglePost,
    props: true
  },
  {
    path: "/tags/:tagName",
    name: "TagPage",
    component: TagPage,
    params: true
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/post",
    name: "Post",
    component: AddPost,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/login",
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;