import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
// import Register from "views/examples/Register.js";
// import Login from "views/examples/Login.js";
// import Icons from "views/examples/Icons.js";
import Tables from "views/examples/Tables.js";
import Assignjob from "views/examples/Assignjob.js";
import Report from "views/examples/Report";
import Contracts from "views/examples/Contracts";
import Addstaff from "views/examples/Addstaff"
import { Container } from "reactstrap";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/admin",
  // },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/report",
    name: "Report",
    icon: "fa fa-file text-blue",
    component: Report,
    layout: "/admin",
  },
  
  {
    path: "/assignjob",
    name: "Assignjob",
    icon: "ni ni-archive-2 text-green",
    component: Assignjob,
    layout: "/admin",
  },
  {
    path: "/contracts",
    name: "Contracts",
    icon: "fa fa-address-book text-orange",
    component: Contracts,
    layout: "/admin",
  },
  {
    path: "/addstaff",
    component:Addstaff,
    layout: "/admin",
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth",
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth",
  // },
];
export default routes;
