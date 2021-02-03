import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Line from "../views/Line";
import Bar from "../views/Bar";
import Doughnut from "../views/Doughnut";
import Pie from "../views/Pie";
import Radar from "../views/Radar";
import RadialBar from "../views/RadialBar";
import PolarArea from "../views/PolarArea";
import Bubble from "../views/Bubble";
import Scatter from "../views/Scatter";
import HeatMap from "../views/HeatMap";
import TreeMap from "../views/TreeMap";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/line",
    name: "Line",
    component: Line,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/bar",
    name: "Bar",
    component: Bar
  },
  {
    path: "/doughnut",
    name: "Doughnut",
    component: Doughnut
  },
  {
    path: "/pie",
    name: "Pie",
    component: Pie
  },
  {
    path: "/radar",
    name: "Radar",
    component: Radar
  },
  {
    path: "/radialbar",
    name: "RadialBar",
    component: RadialBar
  },
  {
    path: "/polar-area",
    name: "PolarArea",
    component: PolarArea
  },
  {
    path: "/bubble",
    name: "Bubble",
    component: Bubble
  },
  {
    path: "/scatter",
    name: "Scatter",
    component: Scatter
  },
  {
    path: "/heatmap",
    name: "HeatMap",
    component: HeatMap
  },
  {
    path: "/treemap",
    name: "TreeMap",
    component: TreeMap
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
