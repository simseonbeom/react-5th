import { navigationItems } from "@/router/router"
import { useState } from "react"


function GlobalNav() {

  
  
  const [items] = useState(navigationItems);
  
  console.log( items );
  

  return (
    <nav className="bg-white">
      <h2 className="sr-only">페이지 탐색</h2>
      <ul>
        {/* {
          navList.map...
        } */}
        <li><a href="#">menu01</a></li>
        <li><a href="#">menu02</a></li>
        <li><a href="#">menu03</a></li>
      </ul>
    </nav>
  )
}
export default GlobalNav