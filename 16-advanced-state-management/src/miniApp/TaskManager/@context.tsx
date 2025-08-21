import { createContext } from "react";
import type { Task } from "./@reducer";



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

    const [taskList,dispatch] = useReducer(taskReducer,INITIAL_TASK)


  // methods
  // handleAddTask =>  dispatch()
  // handleDeleteTask
  // handleTogglePin
  // handleSetTask

  // pinnedTaskList

  // unpinnedTaskList

  return (
    <TaskContext.Provider value={{ pinnedTaskList, unpinnedTaskList}}>
      {...props}
    </TaskContext.Provider>
  )
}























