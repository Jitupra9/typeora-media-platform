import Auth from "../pages/Auth/Auth";
import IsAuthRoutes from "./Auth-Routes/IsAuthRoutes";
import Layout from "../layout/Layout";
import Pagenotfound from "../pages/Pagenotfound";
import Blogs from "../pages/Article/Blogs";
import LiveReports from "../pages/VIdeo/VIdeos";
import Saved from "../pages/saved/Saved";
import StreamDetails from "../pages/VIdeo/StreamDetails";
import Opinion from "../pages/Opinion";
import SpecialDay from "../pages/SpecialDay";
import History from "../pages/Histrory";
import Profile from "../pages/profile/Profile";
import ArticleDetails from "../pages/Article/ArticleDetails";
const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        component: LiveReports,
      },
      {
        path: "/watch",
        component: StreamDetails,
      },
      {
        path: "Articles",
        component: Blogs,
      },
      {
        path: "/ArticleDetails",
        component: ArticleDetails,
      },
      {
        path: "saved",
        component: Saved,
      },
      {
        path: "opinion",
        component: Opinion,
      },
      {
        path: "events-calendar",
        component: SpecialDay,
      },
      {
        path: "history",
        component: History,
      },
      {
        path: "profile",
        component: () => (
          <IsAuthRoutes>
            <Profile />
          </IsAuthRoutes>
        ),
      },
    ],
  },
  {
    path: "/login",
    component: Auth,
  },
  {
    path: "*",
    component: Pagenotfound,
  },
];

export default routes;
