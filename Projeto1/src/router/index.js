import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Erro from "../views/Erro.vue";
import Profile from "../views/Profile.vue";
import Profiles from "../views/Profiles.vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter);
// Make BootstrapVue available throughout your project
//Vue.use(BootstrapVue);

const routes = [
{
path: "/",
name: "Home",
component: Home,
},
{
path: "/about",
name: "About",
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
component: () =>
import(/* webpackChunkName: "about" */ "../views/About.vue"),
},
{
path: "/profile",
component: Profile,
},

{
path: "/profiles/:id",
component: Profiles,
},
{
path: "*",
component: Erro,
},
];

const router = new VueRouter({
mode: "history",
base: process.env.BASE_URL,
routes,
});

export default router;