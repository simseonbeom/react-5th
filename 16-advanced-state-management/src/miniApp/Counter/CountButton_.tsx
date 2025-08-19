
// import type { ButtonHTMLAttributes } from 'react';
import { memo } from 'react';
import S from './style.module.css';

function CountButton({children, onUpdate, ...restProps}:React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onUpdate: () => void;
}) {
  return (
    <button
      type="button"
      className={S.button}
      {...restProps}
      onClick={onUpdate}
    >
      {children}
    </button>
  )
}
export default memo(CountButton)