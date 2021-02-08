import { createRouter, createWebHistory } from "vue-router";
import PostList from "../components/PostList.vue";
import SinglePost from "../components/SinglePost.vue";

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;