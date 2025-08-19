

import {create} from 'zustand';


type Store = {
  count:number;
  step:number,
  max:number;
  min:number;
  increment: ()=>void;
  decrement: ()=>void;
  reset: () => void;
  setStep: (newStep:number) => void;
}

 
// create()()

// export const useCountStore = create<Store>()((set)=> ({
//   count:1,
//   step:1,
//   increment: () => set((state)=> ({ count: state.count + 1 })),
//   decrement: () => set((state)=> ({ count: state.count - 1 })),
// }))



export const useCountStore = create<Store>()((set, _get, store)=> {
  
  const increment = () => {
    set(({count, step, max})=>{
      let nextCount = count + step;
      if(nextCount >= max) nextCount = max;
      return { count: nextCount }
    })
  }

  const decrement = () =>
    set(({ count, step, min }) => {
      let nextCount = count - step;
      if (nextCount <= min) nextCount = min;
      return { count: nextCount };
    });
  
  const setStep = (newStep: number) => {
      set({ step: newStep });
    };
  const reset = () => set(store.getInitialState());

  return {
    count:0,
    step:1,
    min:0,
    max:10,
    increment,
    decrement,
    reset,
    setStep
  }
})




















