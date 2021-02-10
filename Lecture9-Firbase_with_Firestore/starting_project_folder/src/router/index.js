import { createRouter, createWebHistory } from "vue-router";
import PostList from "../components/PostList.vue";
import SinglePost from "../components/SinglePost.vue";
import TagPage from "../components/TagPage.vue";

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;