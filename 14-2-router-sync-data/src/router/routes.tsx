/* 


<Root/>




element : JSX 엘리먼트를 직접 전달하는 방식 v6+
이미 렌더링된 React Element를 라우터에게 전달하는 방식
매 렌더링 시 JSX가 즉시 생성되므로, 코드 스플리팅 (lazy 로딩) 매우 불편함
const a = Root()


Component: 컴포넌트 함수 본문 자체를 전달하는 방식 v7+
라우터가 내부적으로 React.createElement를 호출해서 인스턴스를 생성함
라우터가 필요할 때만 컴포넌트를 생성하므로, lazy 로딩과 Suspense 처리를 더 자연스럽게 할 수 있음
const b = Root

*/


import Root from "@/pages";
import About from "@/pages/About";
import AuthLayout from "@/pages/Auth/AuthLayout";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import RequireAuth from "@/pages/Auth/RequireAuth";
import City from "@/pages/Concerts/City";
import ConcertsHome from "@/pages/Concerts/ConcertsHome";
import Trending from "@/pages/Concerts/Trending";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter, Outlet } from "react-router";




export const routes = createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children:[
      { index:true, Component: Home },
      { path:'about', Component: About },

      /* auth routes */
      {
        path:'auth',
        Component: AuthLayout,
        children:[
          { path:'login', Component: Login },
          { path:'register', Component: Register },
        ]
      },

      /* concerts routes */
      {
        path:'concerts',
        Component:() => (
          <RequireAuth>
            <Outlet></Outlet>
          </RequireAuth>  
        ),
        children:[
          { index:true, Component:ConcertsHome },
          { path:':city', Component:City },
          { path:'trending', Component:Trending },
        ]
      }
    ]
  },
  { path:'*', Component: NotFound }
])












