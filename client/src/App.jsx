import "./App.css";
import RouterProvider from "./routes/RouteProvider";
import { Toaster } from "react-hot-toast";
import FetDefault from "./services/API/FetDefault";
function App() {
  return (
    <>
      <Toaster />
      <FetDefault />
      <RouterProvider />
    </>
  );
}

export default App;
