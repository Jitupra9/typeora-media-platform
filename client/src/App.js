import "./App.css";
import RouterProvider from "./routes/RouteProvider";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster />
      <RouterProvider />
    </>
  );
}

export default App;
