
import { routes } from '@/router/router';
import S from './Header.module.css';
import NavLink from '../NavLink';


function Header() {

  
  // if(isAuth){

  // }

  return (
    <header className={S.header}>
      <h1>2.9cm</h1>
      <nav>
        <h2 className='a11y-hidden'>메인 메뉴</h2>
        <ul>
          {
            routes.map(({path,title})=>(
              <li key={path}>
                <NavLink to={path}>{title}</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}
export default Header