import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Alphabet from "../views/letters/alphabet.vue";
import Letters from "../components/Letters.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/alphabet",
    name: "Alphabet",
    component: Alphabet,
  },
  {
    path: "/alphabet/:id",
    name: "Letters",
    component: Letters,
  },
  {
    path: "/all-letters",
    redirect: "/alphabet",
  },
  {
    path: "/:catchAll(.*)",
    name: "MNotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
