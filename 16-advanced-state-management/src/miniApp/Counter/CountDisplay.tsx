import { useCountStore } from './@store'
import S from './style.module.css'

function CountDisplay_() {

  const { count } = useCountStore();

  return (
    <output className={S.output}>{count}</output>
  )
}
export default CountDisplay_