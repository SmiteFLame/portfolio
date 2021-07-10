import { createWebHistory, createRouter } from "vue-router";

import Who from "@/components/Who.vue";
import About from "@/components/About.vue";
import Project from "@/components/Project.vue";
import Service from "@/components/Service.vue";
import Contact from "@/components/Contact.vue";

const routes = [
  {
    path: "/portfolio",
    name: "HellowWorld",
    component: Who,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
  },
  {
    path: "/service",
    name: "Service",
    component: Service,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
