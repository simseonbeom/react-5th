import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";





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
  {
    title:'회원가입',
    path:'/Register',
    element: <Register />
  },

]

















