import type { AppRoute } from "@/@types/global";
import Home from "@/pages/Home";
import Root from "@/Root";
import { configRoutes } from "@/utils/configRoutes";
import { createBrowserRouter } from "react-router";




const navigation:AppRoute[] = [
  {
    text:'홈',
    path:'',
    display:true,
    Component: Home
  }
]


export const routes = [
  {
    path:'/',
    Component: Root,
    children: configRoutes(navigation) // RouteObject[]
  }
]


const router =  createBrowserRouter(routes,{
  basename: import.meta.env.BASE_URL
})


export default router;
























