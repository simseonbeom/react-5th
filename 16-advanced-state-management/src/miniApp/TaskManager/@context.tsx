import { createContext, useReducer } from "react";
import type { Task } from "./@reducer";
import reducer, { INITIAL_TASK } from "./@reducer";



type TaskMethods = {
  addTask: (nextStep: string) => void;
  deleteTask: (deleteId: string) => void;
  setTask: (taskId: string, isCompleted: boolean) => void;
  TogglePin: (taskId: string) => void;
}

type TaskContextValue = {
  pinnedTaskList: Task[],
  unpinnedTaskList: Task[],
  methods: TaskMethods
} | null

const TaskContext = createContext<TaskContextValue>(null);
TaskContext.displayName = 'TaskContext';

export function TaskProvider(props: React.PropsWithChildren){

    const [taskList,dispatch] = useReducer(reducer,INITIAL_TASK)


  // methods
  const handleAddTask = (nextStep:string) => dispatch({type:'태스크 추가',payload:nextStep});
  // handleDeleteTask
  const handleDeleteTask = (deleteId:string) => dispatch({type:'태스크 삭제',payload:deleteId});
  // handleTogglePin
  // handleSetTask


  // 파생 상태 
  // pinnedTaskList
  // unpinnedTaskList

  return (
    <TaskContext.Provider value={{ pinnedTaskList, unpinnedTaskList, deleteTask}}>
      {...props}
    </TaskContext.Provider>
  )
}























