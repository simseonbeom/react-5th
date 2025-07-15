import Home from "@/pages/Home";
import Login from "@/pages/Login";





export const routes = [
  {
    title:'메인',
    path:'/',
    element: <Home />
  },
  {
    title:'상품목록',
    path:'/Product',
    element: <div>Product page</div>
  },
  {
    title:'고객지원',
    path:'/Contact',
    element: <div>Contact page</div>
  },
  {
    title:'로그인',
    path:'/Login',
    element: <Login />
  },

]

















