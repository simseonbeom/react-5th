import type { Movie_list } from "../type"
import S from '../style.module.css'

type Props = {
  item:Movie_list
}

function CardItem({item}: Props) {

  const { href, label, images } = item;

  const refCallback = (el:HTMLAnchorElement /* domElementNode */) => {

    // 실제 DOM 요소 노드 접근 가능함.
    
    console.log(el);
    
  }


  return (
    <a 
      ref={refCallback}
      href={href}
      title={label}
      aria-label={label}  
    >

    <figure className={S.card}>
      <div className={S.wrapper}>
        <img src={images.src} alt="" />
      </div>
      <p>{label}</p>
    </figure>

    </a>
  )
}
export default CardItem