

import {clsx} from 'clsx';


interface Props {
  size?: 'sm'|'md'|'lg';
  children: React.ReactNode;
  className?:string;
}

function Button_clsx({children, size, className}:Props) {

  return (
    <button 
      type="button"
      className={
        /* 병합이 되지 않음 */
        clsx(
          "bg-sky-500 px-4 py-2 rounded-xl",
          size === 'sm' && 'px-2 py-1 text-sm',
          size === 'md' && 'px-4 py-2 text-base',
          size === 'lg' && 'px-6 py-3 text-lg',
          className
        )
      }
    >
      {children}
    </button>
  )
}
export default Button_clsx