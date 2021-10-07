import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import Dashboard from "@/pages/Dashboard.vue";
import CrudBerita from "@/pages/CrudBerita";
import Testimoni from "@/pages/Testimoni";
import Tiket from "@/pages/Tiket";
import History from "@/pages/History";
import NotFoundPage from "@/pages/NotFoundPage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

const no = (to, from, next) => {
  const getUserDataFromSession = JSON.parse(sessionStorage.getItem("DATA"));
  if (!getUserDataFromSession) {
    next();
    return;
  }
  if (
    to.query !== null &&
    to.query !== undefined &&
    to.query.ref !== null &&
    to.query.ref !== undefined
  ) {
    return next(to.query.ref);
  }
  next("/");
};

const yes = async (to, from, next) => {
  const getUserDataFromSession = JSON.parse(sessionStorage.getItem("DATA"));
  if (getUserDataFromSession) {
    return next();
  } else {
    next("/login");
  }
};

const routes = [
  {
    path: "/login",
    name: Login,
    beforeEnter: no,
    component: Login,
  },
  {
    path: "/register",
    name: Register,
    beforeEnter: no,
    component: Register,
  },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
        beforeEnter: yes,
      },
      {
        path: "berita",
        name: "Data Berita",
        component: CrudBerita,
        beforeEnter: yes,
      },
      {
        path: "testimoni",
        name: "Testimoni",
        component: Testimoni,
        beforeEnter: yes,
      },
      {
        path: "tiket",
        name: "Tiket",
        component: Tiket,
        beforeEnter: yes,
      },
      {
        path: "history",
        name: "History",
        component: History,
        beforeEnter: yes,
      },
    ],
  },
  { path: "*", component: NotFoundPage },
];

export default routes;
