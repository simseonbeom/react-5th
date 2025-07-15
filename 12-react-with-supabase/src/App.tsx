import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import { routes } from "./router/router"
import RouterProvider from './router/RouterProvider/index'

function App() {
  return (
    <div>
      <RouterProvider navigation={<Header />} routes={routes}/>
      <Footer />
    </div>
  )
}

export default App