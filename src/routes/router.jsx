import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import RoomDetails from "../pages/RoomDetails";
import MyBookings from "../pages/MyBookings";

const router = createBrowserRouter([

    
    {
        path : "/",
        element: (
              <App />
             ),
             
        children : [
            {path : "/", element : <Home /> },
            {path : "/rooms", element : <Rooms /> },
            {path : "/rooms/:id", element : <RoomDetails /> },
             {path : "/my-bookings", element : <MyBookings /> },
            {path: "*", element: "NotFound"},
            
        ],
    },      
])
 

export default router;