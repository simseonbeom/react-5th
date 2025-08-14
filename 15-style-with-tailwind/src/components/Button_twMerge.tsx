

interface Props {
  children:React.ReactNode;
  className?:string;
}



function Button_twMerge({children,className}:Props) {

  const classNames = `bg-sky-500 px-4 py-2 rounded-full ${className}`
  
  return (
    <button 
      type="button"
      className={classNames}
    >
      {children}
    </button>
  )
}

export default Button_twMerge;





