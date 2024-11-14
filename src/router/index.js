import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import PersonajesView from "@/views/PersonajesView.vue";
import PersonajeView from "@/views/PersonajeView.vue"
import ContactoView from "@/views/ContactoView.vue"
import NotFoundView from "@/views/NotFoundView.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/personajes",
    name: "personajes",
    component: PersonajesView,
  },
  {
    path:"/personaje/:id",
    name:"personaje",
    component:PersonajeView
  },
  {
    path: "/contacto",
    name: "contacto",
    component: ContactoView,
  },
  {
    path: "*",
    name: "notFound",
    component: NotFoundView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
