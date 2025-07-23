import Authntication from "../pages/Auth/Authntication.jsx";
import ProfileContext from "../context/page/ProfileContext.jsx";
import IsAuthRoutes from "./Auth-Routes/IsAuthRoutes";
import Layout from "../layout/Layout";
import Pagenotfound from "../pages/Pagenotfound";
import Blogs from "../pages/Article/Article";
import LiveReports from "../pages/VIdeo/VIdeos";
import Saved from "../pages/saved/Saved";
import StreamDetails from "../pages/VIdeo/StreamDetails";
import Opinion from "../pages/opinion/Opinion";
import SpecialDay from "../pages/special/SpecialDay";
import History from "../pages/History/Histrory.jsx";
import Profile from "../pages/profile/Profile";
import ArticleDetails from "../pages/Article/ArticleDetails";
import About from "../pages/About";
import Support from "../pages/Support";
import Settings from "../pages/settings/Setting.jsx";
import Report from "../pages/Report";
import Feedback from "../pages/FeedBack";
import MyActions from "../pages/Actions/MyActions";
import MyContent from "../pages/MyContent/MyContent";
import VisitedProfileContent from "../pages/visitedProfileContent";
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
        path: "myContent",
        component: () => (
          <IsAuthRoutes>
            <MyContent />
          </IsAuthRoutes>
        ),
      },
      {
        path: "visited",
        component: () => (
          <IsAuthRoutes>
            <VisitedProfileContent />
          </IsAuthRoutes>
        ),
      },
      {
        path: "saved",
        component: () => (
          <IsAuthRoutes>
            <Saved />
          </IsAuthRoutes>
        ),
      },
      {
        path: "Actions",
        component: () => (
          <IsAuthRoutes>
            <MyActions />
          </IsAuthRoutes>
        ),
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
        path: "about",
        component: About,
      },

      {
        path: "help",
        component: Support,
      },
      {
        path: "report-history",
        component: Report,
      },
      {
        path: "Feedback",
        component: Feedback,
      },
      {
        path: "history",
        component: () => (
          <IsAuthRoutes>
            <History />
          </IsAuthRoutes>
        ),
      },
      {
        path: "settings",
        component: Settings,
      },
      {
        path: "profile",
        component: () => (
          <IsAuthRoutes>
            <ProfileContext>
              <Profile />
            </ProfileContext>
          </IsAuthRoutes>
        ),
      },
    ],
  },
  {
    path: "/login",
    component: Authntication,
  },
  {
    path: "*",
    component: Pagenotfound,
  },
];

export default routes;
