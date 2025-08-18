import { Outlet } from "react-router"
import Header from "./components/Header"

function Root() {
  return (
    <div className="h-screen bg-indigo-50/30 flex flex-col">
      
      <Header />

      <main className="flex-1 m-4">
        <Outlet></Outlet>
      </main>

      <footer>FOOTER</footer>

    </div>
  )
}
export default Root