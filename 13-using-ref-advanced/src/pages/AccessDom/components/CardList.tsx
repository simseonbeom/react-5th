import type { Movie_list } from "../type"
import CardItem from "./CardItem"


interface Props {
  list: Movie_list[]
}


function CardList({list}:Props) {
  return (
    <ul>
      {
        list.map((item)=>(
          <li key={item.id}>
            <CardItem item={item} />
          </li>
        ))
      }
    </ul>
  )
}
export default CardList