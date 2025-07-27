import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import RoomDetails from "../pages/RoomDetails";
import MyBookings from "../pages/MyBookings";
import Layout from "../pages/hotelOwner/Layout";
import Dashboard from "../pages/hotelOwner/Dashboard";
import AddRoom from "../pages/hotelOwner/AddRoom";
import ListAllRooms from "../pages/hotelOwner/ListAllRooms";

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

                   {
        path: 'owner',
        element: <Layout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "add-room", element: <AddRoom /> },
          { path: "list-room", element: <ListAllRooms /> },
        ],
      },
            
        ],
    },      
])
 

export default router;