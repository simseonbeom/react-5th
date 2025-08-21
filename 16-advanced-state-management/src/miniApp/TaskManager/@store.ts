import { create } from "zustand";
import { useShallow } from "zustand/shallow";


export type Task = {
  id: string;
  content: string;
  isPin: boolean;
  isCompleted: boolean;
}

//  create<T>에 설정될 타입
type TaskState = {
  tasks: Task[];
  addTask:(nextStep:string) => void;
  deleteTask:(deleteId:string) => void;
  togglePin:(taskId:string) => void;
  setTask:(taskId:string, isCompleted:boolean) => void;
  reset: () => void;
}

export const INITIAL_TASK:Task[] = [
  {
    id:'4bd80a04-855a-47f6-9ad7-30660f86536e',
    content:'Context + Reducer',
    isCompleted: false,
    isPin: false
  },
  {
    id:'00398dd0-70b7-4b96-a06e-90e2c83848ee',
    content:'Zustand',
    isCompleted: false,
    isPin: false
  },
]



export const useTaskStore = create<TaskState>()((set,_get,store)=> ({
  tasks: INITIAL_TASK,
  addTask: (nextStep) => 
    set((state)=> ({
      tasks: [
        {
          id: crypto.randomUUID(),
          content: nextStep,
          isCompleted: false,
          isPin: false
        },
        ...state.tasks
      ]
  })),

  deleteTask: (taskId) => 
    set((state)=> ({
      tasks: state.tasks.filter((t) => t.id !== taskId)
    })),

  togglePin: (taskId) => 
    set((state)=> ({
      tasks: state.tasks.map(t => 
        t.id === taskId ? {...t, isPin : !t.isPin} : t
      )
    })),

  setTask: (taskId, isCompleted) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === taskId ? { ...t, isCompleted } : t
      ),
    })),

  reset: () => set(store.getInitialState())

}))


// 파생 상태 
// tasks를 가지고 filter 돌려서 pin된 아이템만 받기
export const usePinnedTasks = () => useTaskStore(useShallow((s)=> s.tasks.filter(t => t.isPin)));
export const useUnpinnedTasks = () => useTaskStore(useShallow((s)=> s.tasks.filter(t => !t.isPin)));


























