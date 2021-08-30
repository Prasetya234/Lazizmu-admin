import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import Dashboard from "@/pages/Dashboard.vue";
import CrudBerita from "@/pages/CrudBerita";
import Testimoni from "@/pages/Testimoni";
import Tiket from "@/pages/Tiket";
import History from "@/pages/History";
import NotFoundPage from "@/pages/NotFoundPage";
import Login from "@/pages/Login";

const routes = [
  {
    path: "/login",
    name: Login,
    component: Login,
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
      },
      {
        path: "berita",
        name: "Data Berita",
        component: CrudBerita,
      },
      {
        path: "testimoni",
        name: "Testimoni",
        component: Testimoni,
      },
      {
        path: "tiket",
        name: "Tiket",
        component: Tiket,
      },
      {
        path: "history",
        name: "History",
        component: History,
      },
    ],
  },
  { path: "*", component: NotFoundPage },
];


export default routes;
 