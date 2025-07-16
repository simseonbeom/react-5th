
import { routes } from '@/router/router';
import S from './Header.module.css';
import NavLink from '../NavLink';
import { useAuth } from '@/auth/AuthProvider';
import Swal from 'sweetalert2';


function Header() {

  const { isAuth, logout } = useAuth();
  
  const visibleRoutes = routes.filter(({title})=>{
    if(isAuth) return title !== '로그인' && title !== '회원가입';
    else return title !== '회원가입'
  })


  return (
    <header className={S.header}>
      <h1>2.9cm</h1>
      <nav>
        <h2 className='a11y-hidden'>메인 메뉴</h2>
        <ul>
          {
            visibleRoutes.map(({path,title})=>(
              <li key={path}>
                <NavLink to={path}>{title}</NavLink>
              </li>
            ))
          }
          {
            isAuth && (
              <li>
                <a onClick={(e)=>{
                  e.preventDefault();
                  Swal.fire({
                    title:'정말 로그아웃 하시겠습니까?',
                    icon:'warning',
                    showCancelButton: true,
                    confirmButtonText: "로그아웃",
                    cancelButtonText: "돌아가기",

                  }).then((result)=>{
                    if (result.isConfirmed) {
                      logout()
                    }
                  })

                }} href="">로그아웃</a>
              </li>
            )
          }
        </ul>
      </nav>
    </header>
  )
}
export default Header