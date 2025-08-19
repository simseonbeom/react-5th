
import { memo } from 'react';
import S from './style.module.css';
import { useCountStore } from './@store';

function CountButton_({children, ...restProps}:React.ButtonHTMLAttributes<HTMLButtonElement>) {

  const {increment, decremenet} = useCountStore();

  
  
  return (
    <button
      type="button"
      className={S.button}
      {...restProps}
      onClick={increment}
    >
      {children}
    </button>
  )
}
export default memo(CountButton_)