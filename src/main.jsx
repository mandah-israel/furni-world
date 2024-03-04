import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Bed from "./Pages/Bed.jsx";
import Chair from "./Pages/Chair.jsx";
import Dining from "./Pages/Dining.jsx";
import Products from "./Pages/Products.jsx";
import Cin from "./Pages/Cin.jsx";
import Spen from "./Pages/Spen.jsx";
import Vere from "./Pages/Vere.jsx";
import Bin from "./Pages/Bin.jsx";
import Unix from "./Pages/Unix.jsx";
import Sol from "./Pages/Sol.jsx";
import Pere from "./Pages/Pere.jsx";
import Set from "./Pages/Set.jsx";
import Vin from "./Pages/Vin.jsx";
import Were from "./Pages/Were.jsx";
import Yep from "./Pages/Yep.jsx";
import Pine from "./Pages/Pine.jsx";
import Gine from "./Pages/Gine.jsx";
import Fish from './Pages/Fish'
import Vull from './Pages/Vull'
import Vex from './Pages/Vex'
import Plate from './Pages/Plate'
import Rat from './Pages/Rat'
import Boss from './Pages/Boss'
import Light from './Pages/Light'
import Dice from './Pages/Dice'
import Horse from './Pages/Horse'
import Vip from './Pages/Vip'
import Bell from './Pages/Bell'
import Login from "./Pages/Login.jsx";
import Accessories from "./Pages/Accessories.jsx";
import About from "./Pages/About.jsx";
import { Clock } from "@phosphor-icons/react";
import Register from "./Pages/Register.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/bed",
    element: <Bed/>,
  },
  {
    path: "/chair",
    element: <Chair/>,
  },
  {
    path: "/dining",
    element: <Dining/>,
  },
  {
    path: "/products",
    element: <Products/>,
  },
  {
    path: "/cin",
    element: <Cin/>,
  },
  {
    path: "/spen",
    element: <Spen/>,
  },
  {
    path: "/vere",
    element: <Vere/>,
  },
  {
    path: "/bin",
    element: <Bin/>,
  },
  {
    path: "/unix",
    element: <Unix/>,
  },  
  {
    path: "/sol",
    element: <Sol/>,
  },  
  {
    path: "/pere",
    element: <Pere/>,
  }, 
  {
    path: "/set",
    element: <Set/>,
  },   
  {
    path: "/vin",
    element: <Vin/>,
  }, 
  {
    path: "/were",
    element: <Were/>,
  },   
  {
    path: "/yep",
    element: <Yep/>,
  }, 
  {
    path: "/pine",
    element: <Pine/>,
  },  
  {
    path: "/accessories",
    element: <Accessories/>,
  }, 
  {
    path: "/gine",
    element: <Gine/>,
  },
  {
    path: "/plate",
    element: <Plate/>,
  },      
  {
    path: "/vull",
    element: <Vull/>,
  },      
  {
    path: "/vex",
    element: <Vex/>,
  },      
  {
    path: "/fish",
    element: <Fish/>,
  }, 
  {
    path: "/rat",
    element: <Rat/>,
  },  
  {
    path: "/horse",
    element: <Horse/>,
  },  
  {
    path: "/bell",
    element: <Bell/>,
  },  
  {
    path: "/vip",
    element: <Vip/>,
  },  
  {
    path: "/dice",
    element: <Dice/>,
  },  
  {
    path: "/light",
    element: <Light/>,
  },  
  {
    path: "/boss",
    element: <Boss/>,
  },  
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/login",
    element: <Login/>,
  }, 
  {
    path: "/register",
    element: <Register/>,
  }                                   
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


