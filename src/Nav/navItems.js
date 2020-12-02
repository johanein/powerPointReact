import React from "react";
// import Lazy from "../Components/Lazy/lazy";
import Home from '../Components/Home'
import VirtualizedList from '../Components/VirtualizedList'
import Table from '../Components/Table'
// const Table = lazy(() => import("../Components/Table"));
// const VirtualizedList = React.lazy(() => import("../Components/VirtualizedList"));

const navItems = [
      {
      url: "home",
      name:'Home',
      component: <Home />,
      path:"/home"
  },
  {
    url: "virtualizedList",
    name: "VirtualizedList",
    component: <VirtualizedList />,
    path: "/virtualizedList",
  },
  {
    url: "table",
    name: "Table",
    component: <Table />,
    path: "/table",
  },
  //     {
  //     url: "designer",
  //     name:'Designer',
  //     component:<Lazy><Designer /></Lazy>,
  //     path:"/designer"
  // },
  //     {
  //     url: "charts",
  //     name:'Charts',
  //     component:<Lazy><Charts /></Lazy>,
  //     path:"/charts"
  // },
  //     {
  //     url: "toast",
  //     name:'Toast',
  //     component:<ToastComponent />,
  //     path:"/toast"
  // },
  //     {
  //     url: "dnd",
  //     name:'Drag and Drop',
  //     component:<DragAndDrop />,
  //     path:"/dnd"
  // },
  //     {
  //     url: "advSearch",
  //     name:'Advance Search',
  //     component:<AdvancedSearch />,
  //     path:"/advSearch"
  // },
  //     {
  //     url: "countUp",
  //     name:'Count up',
  //     component:<CountUp />,
  //     path:"/countUp"
  // },
  //     {
  //     url: "creditCard",
  //     name:'Credit Card',
  //     component:<CreditCard />,
  //     path:"/creditCard"
  // },
  //     {
  //     url: "",
  //     name:'Logout',
  //     component:<Logout />,
  //     path:"/"
  // },
];

export default navItems;
