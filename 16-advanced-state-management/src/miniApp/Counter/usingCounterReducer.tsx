import { useReducer } from "react"

type State = { count: number };

const INITIAL:State = { count:0 };

// action { type: string , payload: unknown }

type Action = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'set', payload: number }
  | { type: 'reset' }

function reducer (state:State, action:Action) {
  // conditional action ...
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'set':
      return { count: action.payload }
    case 'reset':
      return INITIAL
    default: 
      return state
  }
}

// function useReducer (reducer, initValue) {
//   const [state,setState] = useState(
//     // initValue ? ...CounterReducer.
//   )
// }

function CounterReducer() {

  // reducer = dispatch
  const [state, dispatch] = useReducer(reducer,INITIAL);

  const setTo = 100;
  
  return (
    <div className="text-center text-accent">
      <p>count: {state.count}</p>
      <button type="button" onClick={()=> dispatch({type: 'decrement'})} className="px-2 py-1 border border-accent m-1 rounded">-</button>
      <button type="button" onClick={()=> dispatch({type: 'increment'})} className="px-2 py-1 border border-accent m-1 rounded">+</button>
      <hr />
      <button type="button" onClick={()=> dispatch({type:'set', payload: setTo})} className="px-2 py-1 border border-accent m-1 rounded">{setTo} 으로 변경</button>
      <hr />
      <button type="button" onClick={()=> dispatch({type:'reset'})} className="px-2 py-1 border border-accent m-1 rounded">리셋</button>
    </div>
  )
}
export default CounterReducer