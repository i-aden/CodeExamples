import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import MessageFeed from "../views/MessageFeed.vue";
import Message from "../views/Message.vue";
import NotFound from "../views/NotFound.vue";
import ParamsError from "../components/ParamsError.vue";

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
    path: "/messagefeed",
    name: "MessageFeed",
    component: MessageFeed,
    props: true,
    async beforeEnter(to, from, next) {
      if (!to.params || !to.params.messages) {
        const module = await import("../assets/messages.js");

        const messages = module.default;
        if (messages && messages.length > 0) {
          to.params.messages = messages;
        }
      }

      next();
    },
  },
  {
    path: "/message/:id",
    name: "Message",
    component: Message,
    props: true,
    async beforeEnter(to, from, next) {
      if (to.params && to.params.id) {
        const id = to.params.id;
        const module  = await import ("../assets/messages.js");
        const messages = module.default;
        if (messages && messages.length > 0 && id < messages.length) {
          to.params.content = messages[id];
        }
      }

      next()
    },
  },
  {
    path: "/params-error",
    name: "ParamsError",
    component: ParamsError,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
