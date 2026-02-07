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
import { AppProvider } from "../context/AppContext";
import Loader from "../components/Loader";

const router = createBrowserRouter([

    
    {
        path : "/",
        element: (
              <AppProvider>
              <App />
              </AppProvider>
             ),
             
        children : [
            {path : "/", element : <Home /> },
            {path : "/rooms", element : <Rooms /> },
            {path : "/rooms/:id", element : <RoomDetails /> },
            {path : "/my-bookings", element : <MyBookings /> },
            {path : "/loader/:nextUrl", element : <Loader /> },
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