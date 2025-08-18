import { NavLink } from "react-router"

function Header() {
  return (
    <header>
      
      <NavLink 
        to="/"
        
      >
        <span>🤯</span>
        <span>클라이언트 사이드 라우팅</span>
      </NavLink>
    </header>
  )
}
export default Header