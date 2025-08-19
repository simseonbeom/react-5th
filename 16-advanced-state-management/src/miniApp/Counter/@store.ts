

import {create} from 'zustand';


type Store = {
  count: number;
  step: number;
  increment: () => void;
  decrement: () => void;
}
 

export const useCountStore = create<Store>()((set)=> ({
  count:1,
  step:1,
  increment: () => set((state)=> ({ count: state.count + 1 })),
  decrement: () => set((state)=> ({ count: state.count - 1 })),
}))




















