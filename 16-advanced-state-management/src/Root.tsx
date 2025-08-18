import { Outlet } from "react-router"

function Root() {
  return (
    <div>
      
      <header>HEADER</header>

      <main>
        <Outlet></Outlet>
      </main>

      <footer>FOOTER</footer>

    </div>
  )
}
export default Root