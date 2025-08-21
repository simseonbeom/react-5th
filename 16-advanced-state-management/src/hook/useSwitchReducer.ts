import { useCallback, useId, useReducer } from "react";




type UseSwitchOptions = {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?:(next:boolean) => void;
  id?: string;
  disabled?: boolean;
}


type Action = 
  | { type: 'SET', payload: boolean }
  | { type: 'TOGGLE' }

function reducer(state:boolean, action:Action){
  switch (action.type) {
    case 'SET':
      return action.payload
    case 'TOGGLE':
      return !state
    default:
      return state;
  }
}

export function useSwitch(opts:UseSwitchOptions = {}){
  
  const {
    defaultChecked = false,
    checked,
    onChange,
    id,
    disabled
  } = opts;

  // controlled component, uncontrolled component
  // 부모 컴포넌트가 checked 값을 props로 내려주면, onChange로만 상태를 바꿀 수 있게 
  // const [uncontrolled, setUncontrolled] = useState(defaultChecked);
  const [internal, dispatch] = useReducer(reducer, defaultChecked);

  const reactId = useId();

  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : internal;

  const setChecked = useCallback( // 버튼을 눌렀을 때 강제 지정 
    (next:boolean) => {
      if(!isControlled) dispatch({type:'SET', payload:next})
      onChange?.(next)
    },
    [isControlled, onChange]
  )

  const toggle = useCallback(() => {
    if(disabled) return;

    if(!isControlled){
      dispatch({type:'TOGGLE'});
      onChange?.(!isChecked);
    }else{
      onChange?.(!isChecked);
    }
    setChecked(!isChecked);

  },[disabled, isChecked, isControlled, onChange, setChecked])
  

  const a11yProps = { // 태그의 속성
    id: id ?? reactId,
    role: 'switch' as const,
    'aria-label': String(isChecked),
    'aria-disabled': disabled || undefined,
    tabIndex: disabled ? -1 : 0,
    // event binding
    onClick: () => toggle(),
    onKeyDown: (e:React.KeyboardEvent) => {
      if(disabled) return;
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        toggle();
      }
      if(e.key === 'ArrowLeft') setChecked(false);
      if(e.key === 'ArrowRight') setChecked(true);
    }
  }

  return { checked: isChecked, setChecked, toggle, a11yProps, disabled }
  
}





