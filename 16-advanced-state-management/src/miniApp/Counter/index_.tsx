
import tw from '@/utils/tw'
import S from './style.module.css'


function Counter_({className}:{className?:string}) {
  return (
    <div className={tw(S.component,className)}>
      <output className={S.output}>0</output>
    </div>
  )
}
export default Counter_