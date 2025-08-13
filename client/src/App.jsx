import "./App.css";
import RouterProvider from "./routes/RouteProvider";
import { Toaster } from "react-hot-toast";
// import ScrollToTop from "./component/utils/ScrollToTop";
function App() {
  return (
    <>
      <Toaster />
      {/* <ScrollToTop /> */}
      <RouterProvider />
    </>
  );
}

export default App;
