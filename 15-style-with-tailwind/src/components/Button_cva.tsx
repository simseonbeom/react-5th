

import { cva, type VariantProps } from 'class-variance-authority';



const buttonVariants = cva(
  'inline-flex items-center rounded-md px-3 py-2',
  {
    variants:{
      intent: {
        primary: 'bg-sky-600 text-white hover:bg-sky-800',
        secondary: 'bg-orange-600 text-white hover:bg-orange-800',
        ghost: 'bg-gray-400 text-white hover:bg-slate-100',
      },
      size: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 py-2',
        lg: 'px-6 py-3 text-lg',
      },
      block: {
        true: 'w-full justify-center',
        false: ''
      },
    },
  }
)


// interface Props {
//   children: React.ReactNode;
//   disabled?: boolean;
//   className?:string;
// }

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & 
  VariantProps<typeof buttonVariants>



function Button_cva({children}:ButtonProps) {
  return (
    <button 
      type="button"
      
    >
      {children}
    </button>
  )
}
export default Button_cva