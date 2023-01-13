import Vue from "vue";
import VueRouter from "vue-router";
import Router from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../view/homeIndex/homeIndex.vue"),
    redirect: "/welcome",
    meta: {
      title: "首页",
    },
    children: [
      {
        path: "/welcome",
        name: "welcome",
        component: () =>
          import("../view/welcomeContent/welcomeContent.vue"),
        meta: {
          title: "欢迎页",
          isHide: true,
        },
      },
    ],
  },
  {
    path: "*",
    name: "404",
    component: () => import("../view/404/noFound.vue"),
    meta: {
      title: "404",
    },
  },
];

//解决相同路由情况下跳转报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
