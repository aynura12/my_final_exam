
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ROUTES from "./routes/router"
import {HelmetProvider} from "react-helmet-async"
const router=createBrowserRouter(ROUTES)
function App() {
  return (
    <div className="App">
      <HelmetProvider> <RouterProvider router={router}></RouterProvider></HelmetProvider>
   
    </div>
  );
}

export default App;
