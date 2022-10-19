/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import GridViewIcon from '@mui/icons-material/GridView';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
// core components/views for Admin layout
import Main from "views/Main/Main.js";
import HR from "views/HR/HR.js";
import CRM from "views/CRM/CRM.js";
import Finance from "views/Finance/Finance.js";
import Analytics from "views/Analytics/Analytics.js";
import Subscription from "views/Subscription/Subscription.js";
import UserProfile from "views/UserProfile/UserProfile.js";


const dashboardRoutes = [
  {
    path: "/main",
    name: "Main",
    rtlName: "لوحة القيادة",
    icon: GridViewIcon,
    component: Main,
    layout: "/admin",
  },
  {
    path: "/hr",
    name: "HR",
    rtlName: "ملف تعريفي للمستخدم",
    icon: PeopleOutlinedIcon,
    component: HR,
    layout: "/admin",
  },
  {
    path: "/crm",
    name: "CRM",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: CRM,
    layout: "/admin",
  },
  {
    path: "/finance",
    name: "Finance",
    rtlName: "طباعة",
    icon: AccountBalanceOutlinedIcon,
    component: Finance,
    layout: "/admin",
  },
  {
    path: "/analytics",
    name: "Analytics",
    rtlName: "الرموز",
    icon: AnalyticsOutlinedIcon,
    component: Analytics,
    layout: "/admin",
  },
  {
    path: "/subscription",
    name: "Subscription",
    rtlName: "خرائط",
    icon: SubscriptionsOutlinedIcon,
    component: Subscription,
    layout: "/admin",
  },
  //   {
  //   path: "/test",
  //   name: "Test",
  //   rtlName: "خرائط",
  //   icon: SubscriptionsOutlinedIcon,
  //   component: UserProfile,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
