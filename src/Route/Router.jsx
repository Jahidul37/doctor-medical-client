import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import DoctorService from "../Pages/DoctorService/DoctorService";
import DoctorServiceDetails from "../Pages/DoctorServiceDetails/DoctorServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        // all service data 
        path: "/services",
        element: <DoctorService></DoctorService>,
        
      },
      {
        // single service data route
        path: "/service/:id",
        element: <DoctorServiceDetails></DoctorServiceDetails>,
        
      },
    ],
  },
]);

export default router;
