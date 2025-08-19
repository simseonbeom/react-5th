
import { memo } from 'react';
import S from './style.module.css';
import { useCountStore } from './@store';

function CountButton_({children, type = "+", ...restProps}:Omit<React.ButtonHTMLAttributes<HTMLButtonElement>,'type'> & {
  type?: '+' | '-'
} ) {

  // store의 전체 값을 구독 내가 필요없는 항목이 업데이트가 되면 리-렌더링이 발생.
  // const {increment, decrement} = useCountStore();
  // let handler = increment;
  // if(type === '-') handler = decrement

  
  // store의 필요한 값만 구독 내가 필요없는 항목이 업데이트가 되면 리-렌더링이 발생하지 않음.
  const handler = useCountStore((s)=>
    type === '+' ? s.increment : s.decrement
  )

  
  return (
    <button
      type="button"
      className={S.button}
      onClick={handler}
      {...restProps}
    >
      {children}
    </button>
  )
}
export default memo(CountButton_)