
// import type { ButtonHTMLAttributes } from 'react';
import S from './style.module.css';

function CountButton_({children,...restProps}:React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={S.button}
      {...restProps}
    >
      {children}
    </button>
  )
}
export default CountButton_