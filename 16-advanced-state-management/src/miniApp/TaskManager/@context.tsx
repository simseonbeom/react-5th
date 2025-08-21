import { createContext, useContext, useMemo, useReducer } from "react";
import type { Task } from "./@reducer";
import reducer, { addTask, deleteTask, INITIAL_TASK, setTask, togglePin } from "./@reducer";



type TaskMethods = {
  addTask: (nextStep: string) => void;
  deleteTask: (deleteId: string) => void;
  setTask: (taskId: string, isCompleted: boolean) => void;
  togglePin: (taskId: string) => void;
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


  const taskMethods = useMemo<TaskMethods>(() => {
      // methods
    const handleAddTask = (nextStep:string) => dispatch(addTask(nextStep));
    // handleDeleteTask
    const handleDeleteTask = (deleteId:string) => dispatch(deleteTask(deleteId));
    // handleTogglePin
    const handleTogglePin = (taskId:string) => dispatch(togglePin(taskId));
    // handleSetTask
    const handleSetTask = (taskId:string,isCompleted:boolean) => dispatch(setTask(taskId, isCompleted));

    return {
      addTask: handleAddTask,
      deleteTask: handleDeleteTask,
      togglePin: handleTogglePin,
      setTask: handleSetTask
    }
  }, [])
 

  // 파생 상태 
  const {pinnedTaskList, unpinnedTaskList} = useMemo(() => {

    return {
      pinnedTaskList: taskList.filter(task => task.isPin),
      unpinnedTaskList: taskList.filter(task => !task.isPin)
    }
  },[taskList])


  return (
    <TaskContext.Provider value={{ pinnedTaskList, unpinnedTaskList, methods: taskMethods}} {...props}/>
  )
}


// eslint-disable-next-line react-refresh/only-export-components
export const useTask = () => {
  const contextValue = useContext(TaskContext);
  if(!contextValue) throw new Error('useTask 훅은 TaskProvider 내부에서만 사용이 가능합니다.');
  return contextValue;
}



























